import axios from 'axios';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  repositories: any = [];
  gridList = 'list';
  showNotFound = false;
  getRepositories(): string[] {
    return this.repositories;
  }


  toggleNotFound(length) {
    if (!length) {
      this.showNotFound = true;
    } else {
      this.showNotFound = false;
    }
  }
  async findRepositories(search, lang) {
    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${search}+language:${lang}`);
      this.repositories = [];
      response.data.items.forEach(user => {
        this.repositories.push({
          id: user.id,
          title: user.full_name,
          description: user.description,
          keywords: [lang, search],
          stars: user.stargazers_count,
          link: user.html_url,
          addedToList: false
        });
      });
      this.toggleNotFound(this.repositories.length);
      return this.repositories;
    } catch (error) { throw error; }
  }
}
