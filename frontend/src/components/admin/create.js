import React, { useState, useEffect } from 'react';
// import axiosInstance from '../../axios';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
//MaterialUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Box, Card, CardContent, CardMedia, Divider } from '@material-ui/core';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
// import Rating from '@material-ui/core/Rating';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
	paper: {
		// marginLeft: theme.spacing(4),
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	card: {
		// paddingTop: '130%', // 16:9
		padding: theme.spacing(5),
		// width:'100',
	},
	cardMedia: {
		// paddingTop: '130%', // 16:9
		height:'100vh',
		// width:'100',
	},
	imagewrap:{
		// marginTop: theme.spacing(1),
		// flexDirection: 'column',
		alignItems: 'center',
		marginBottom: theme.spacing(20),
	},
}));

const Create = () => {
	//https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1
	// function slugify(string) {
	// 	const a =
	// 		'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
	// 	const b =
	// 		'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
	// 	const p = new RegExp(a.split('').join('|'), 'g');

	// 	return string
	// 		.toString()
	// 		.toLowerCase()
	// 		.replace(/\s+/g, '-') // Replace spaces with -
	// 		.replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
	// 		.replace(/&/g, '-and-') // Replace & with 'and'
	// 		.replace(/[^\w\-]+/g, '') // Remove all non-word characters
	// 		.replace(/\-\-+/g, '-') // Replace multiple - with single -
	// 		.replace(/^-+/, '') // Trim - from start of text
	// 		.replace(/-+$/, ''); // Trim - from end of text
	// }
	//

	const history = useHistory();
	const initialFormData = Object.freeze({
		title: '',
		tmdbId: '',
		content: '',
		rating: '',
	});
	const [postData, updateFormData] = useState(initialFormData);
	// const [value, setValue] = React.useState(2);
	const [postimage, setPostImage] = useState(null);
	const [preview, setPreview] = useState('');
	const [meta, setMeta] = useState({});

	const handleChange = (e) => {
		if ([e.target.name] == 'image') {
			setPostImage({
				image: e.target.files,
			});
			
		};
	
		if ([e.target.name] == 'title') {
			updateFormData({
				...postData,
				[e.target.name]: e.target.value.trim(),
				// 'slug': slugify(e.target.value.trim()),
			});
		} else {
			updateFormData({
				...postData,
				[e.target.name]: e.target.value.trim(),
			});
		}
	};

	useEffect(() => {
		if (postimage) {
			const reader = new FileReader();
			reader.onload = () => {
				setPreview(reader.result);
			}
			reader.readAsDataURL(postimage.image[0]);
			let img = new Image();
			img.src = window.URL.createObjectURL(postimage.image[0]);
			img.onload = () => {
				setMeta({
					width:img.width,
					height:img.height,
					name: postimage.image[0].name,
					size: postimage.image[0].size,
					type: postimage.image[0].type,
					lastModified: postimage.image[0].lastModified,
				});
			};
			// console.log(postimage.image[0]);

		} else{
			setPreview(null);
		}
	}, [postimage]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const config = { 
			headers: { 
			'Content-Type': 'multipart/form-data' ,
			'Authorization': `JWT ${localStorage.getItem('access')}`,
			'Accept': 'application/json'
		},
		};
		const URL = `${process.env.REACT_APP_API_URL}/api/admin/create/`;
		let formData = new FormData();
		formData.append('title', postData.title);
		formData.append('tmdbId', postData.tmdbId);
		formData.append('rating', postData.rating);
		// formData.append('author', 1);
		// formData.append('excerpt', postData.excerpt);
		formData.append('content', postData.content);
		formData.append('image', postimage.image[0]);
		axios.post(URL, formData, config)
		.then((res) => {
			console.log(res.data);
		})
		.catch((err) => console.log(err));

		history.push({
			pathname: '/admin/',
		});
		window.location.reload();
	};


	const classes = useStyles();

	return (
		<Container component="main" maxWidth="lg" >
			{/* <CssBaseline /> */}
			<Grid container 
			// direction="row" 
			alignItems="center"
			xs={12}
			>
				<Grid item xs={12} className={classes.paper} justifyContent='center'>
					<Grid container direction="row" alignItems="center" justifyContent='center'>
						<Avatar className={classes.avatar}>
							<AssignmentOutlinedIcon/>
						</Avatar>
						<Typography  variant="h3">
							Create A New Post
						</Typography>
					</Grid>
					<form className={classes.form} noValidate>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="title"
									label="Post Title"
									name="title"
									autoComplete="title"
									onChange={handleChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="tmdbId"
									label="movie id"
									name="tmdbId"
									autoComplete="tmdbId"
									onChange={handleChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="rating"
									label="rating"
									name="rating"
									autoComplete="rating"
									onChange={handleChange}
								/>
							</Grid>
							{/* <Grid item xs={12}>
							<Rating
								name="simple-controlled"
								value={value}
								onChange={(event, newValue) => {
									setValue(newValue);
								}}
							/>
							</Grid> */}
							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="content"
									label="content"
									name="content"
									autoComplete="content"
									onChange={handleChange}
									multiline
									rows={4}
								/>
							</Grid>
							<input
								accept="image/*"
								className={classes.input}
								id="post-image"
								onChange={handleChange}
								name="image"
								type="file"
							/>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={handleSubmit}
						>
							Create Post
						</Button>
					</form>
				</Grid>
				<Grid item xs={12} className={classes.imagewrap}>
					{  
					preview?(
					<Box xs={12} >
						<Grid 
						container 
						direction="row"
						alignItems="center" 
						justifyContent='center'
						
						>
							<Avatar className={classes.avatar}>
								<PhotoCamera/>
							</Avatar >
						
								<Typography variant='h3'>
								Image Information
								</Typography>

						</Grid>	
						<Box>
							<Card className={classes.card}>
								{/* <img src={preview} alt="" id="img" className={classes.cardMedia} /> */}
								<CardMedia
									className={classes.cardMedia}
									image={preview}
									title="Upload"
								/>
						
							</Card>
						</Box>	
						<Box style={{marginTop: 20}}>
						{meta.width >= 720? 
							(<Typography variant='h3' align='center'>
								This is a Large Image.
							</Typography>):
							(
							<Typography variant='h3' align='center'>
								This is a Small Image.
							</Typography>
							)
						}
						</Box>	
						<Box style={{marginTop: 20, marginBottom: 20,}} >
							<Typography variant='h5' color='primary' align='center'>
								You Can Check the Metadata Below:
							</Typography>
						</Box>	
						<Divider style={{marginBottom: 20}}/>
						<Grid 
							xs={10}
							container 
							justifyContent='space-between'
							style={{marginLeft: 20}}
							spacing={2}
						>
						<Grid item xs={5} display='flex' >
							<Typography variant='h5' >
							{`Width × Height: ${meta.width}px × ${meta.height}px`}
							</Typography>
						</Grid>	
						<Grid  item xs={5} display='flex'>
							<Typography variant='h5'>
							{`Size: ${Math.round(meta.size/1024*100)/100}KB`}
							</Typography>
						</Grid>
						<Grid item xs={5} display='flex'>
							<Typography variant='h5'>
							{`Name: ${meta.name}`}
							</Typography>
						</Grid>				
						<Grid item xs={5} display='flex'>
							<Typography variant='h5'>
							{`Type: ${meta.type}`}
							</Typography>
						</Grid>	
						<Grid item xs={5} display='flex'>
							<Typography variant='h5'>
							{`Modified Date: ${moment(meta.lastModified).format('YYYY-MM-DD')}`}
							</Typography>
						</Grid>	
						</Grid>
					</Box>
					):(
					<>
					</>)
					}
				</Grid>
			</Grid>
		</Container>
	);
}
export default Create;