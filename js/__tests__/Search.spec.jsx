import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { shallow, render } from 'enzyme';

import store from '../store';
import { setSearchTerm } from '../actionCreators';
import Search, { Unwrapped as UnwrappedSearch } from '../Search';
import preload from '../../data.json';
import ShowCard from '../ShowCard';

test('Search renders correctly', () => {
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm="" />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
  const component = shallow(<UnwrappedSearch searchTerm="" shows={preload.shows} />);
  expect(preload.shows.length).toEqual(component.find(ShowCard).length);
});

test('Search should render correct amount of shows based on search term - without Redux', () => {
  const searchWord = 'black';
  const component = shallow(<UnwrappedSearch shows={preload.shows} searchTerm={searchWord} />);
  // component.find(Header).dive().find('input').simulate('change', { target: { value: searchWord } });
  const showCount = preload.shows.filter(
    show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
  ).length;
  expect(component.find(ShowCard).length).toEqual(showCount);
});

test('Search should render correct amount of shows based on search term - with Redux', () => {
  const searchWord = 'black';
  // component.find(Header).dive().find('input').simulate('change', { target: { value: searchWord } });
  store.dispatch(setSearchTerm(searchWord));
  const component = render(
    <Provider store={store}>
      <MemoryRouter>
        <Search shows={preload.shows} searchTerm={searchWord} />
      </MemoryRouter>
    </Provider>
  );
  const showCount = preload.shows.filter(
    show => `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
  ).length;
  // `${show.title.toUpperCase()} ${show.description.toUpperCase()}`.includes(searchWord.toUpperCase())).length;
  expect(component.find('.show-card').length).toEqual(showCount);
});
