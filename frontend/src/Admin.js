import React, { useEffect, useState } from 'react';
import Posts from './components/admin/posts';
import PostLoadingComponent from './components/posts/postLoading';
// import axiosInstance from './axios';
import axios from 'axios';
import { Typography, Box, CssBaseline } from '@material-ui/core';

const Admin = (props) => {
	const {history} = props;
	const PostLoading = PostLoadingComponent(Posts);
	const [appState, setAppState] = useState({
		loading: true,
		posts: null,
	});

	useEffect(() => {
		const config = { 
			headers: { 
			// 'Content-Type': 'multipart/form-data' ,
			'Authorization': `JWT ${localStorage.getItem('access')}`,
			'Accept': 'application/json'
			},
		};
		const URL = `${process.env.REACT_APP_API_URL}/api/`;

		axios.get(
			URL, config
		).then((res) => {
			const allPosts = res.data;
			setAppState({ loading: false, posts: allPosts });
			console.log(res.data);
		});
	}, [setAppState]);

	return (
	<Box>
		<CssBaseline />
		<Box 
			className="App"
			display="flex"
			justifyContent="center"
			m={1}
			p={1}
			bgcolor="background.paper"
		>
			
			<Typography variant='h1'>
				My Movie Space
			</Typography>
		</Box>
			<PostLoading isLoading={appState.loading} posts={appState.posts} history={history}/>
	</Box>
	);
}
export default Admin;
