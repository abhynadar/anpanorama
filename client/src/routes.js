import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import ThoughtsPage from './components/thoughts/ThoughtsPage';
import ThoughtDetailsPage from './components/thoughts/ThoughtDetailsPage';

export default (
	<Route path="/" component={App} >
		<IndexRoute component={HomePage} />
		<Route path="courses" component={CoursesPage} />
		<Route path="course" component={ManageCoursePage} />
		<Route path="course/:id" component={ManageCoursePage} />
		<Route path="thoughts" component={ThoughtsPage} />
		<Route path="thought/:id" component={ThoughtDetailsPage} />
		<Route path="about" component={AboutPage} />
	</Route>
);
