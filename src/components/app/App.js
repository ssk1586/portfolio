import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import PostStatusFilter from '../PostStatusFilter/PostStatusFilter';
import PostList from '../PostList/PostList';
import PostAddForm from '../PostAddForm/PostAddForm';
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, label: 'Learn React', like: false, important: false },
        { id: 2, label: 'Add a new item', like: false, important: true },
      ],
      term: '',
      filter: 'all',
    }
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToogleLiked = this.onToogleLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.filterPost = this.filterPost.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);

    this.maxId = 4;
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(element => element.id === id)
      
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, ...after];

      return ({
        data: newArr
      });
    });
  };

  addItem(text) {
    const item = {
      label: text,
      important: false,
      id: this.maxId++
    }
    this.setState(({ data }) => {
      const newItems = [item, ...data];

      return ({
        data: newItems
      });
    });
  }

  onToggleImportant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(item => item.id === id);

      const oldData = data[index];
      const newItem = { ...oldData, important: !oldData.important };
      const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

      return (
        {
          data: newData
        })
    });
  }

  onToogleLiked(id) {
    this.setState(({ data }) => {
      const index = data.findIndex(item => item.id === id);

      const oldData = data[index];
      const newItem = { ...oldData, like: !oldData.like };
      const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

      return (
        {
          data: newData
        })
    });
  };

  searchPost(items, term) {
    if (term.length === 0) {
      return items
    };
    return items.filter((item) => {
      return item.label.indexOf(term) > -1 
    });
  };



  filterPost(items, filter) {
    if (filter === 'like') {
      return items.filter(item => item.like)
    } else {
      return items;
    };
  };

  onUpdateSearch(term) {
    this.setState({ term });
  };

  onFilterSelect(filter) {
    this.setState({filter})
  }

  render() {
    const { data, term, filter} = this.state;
    const likesCount = data.filter(item => item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

    return (
      <div className="app">
        <AppHeader
          likesCount={likesCount}
          allPosts={allPosts}
        />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}/>
        </div>
        <PostList
          data={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToogleLiked={this.onToogleLiked}
          
        />
        <PostAddForm
          onAdd = {this.addItem}
        />
      </div>
    );
  };
};

