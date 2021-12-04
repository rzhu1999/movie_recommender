import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import { Typography,Grid,Card,CardMedia,CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	cardMedia: {
		paddingTop: '177%', // 16:9
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	postTitle: {
		fontSize: '16px',
		textAlign: 'left',
	},
	postText: {
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'baseline',
		fontSize: '12px',
		textAlign: 'left',
		marginBottom: theme.spacing(2),
	},
	cardscontainer:{
		marginTop: theme.spacing(3),
	},
}));

const Posts = (props) => {
	const { posts, history } = props;
	const classes = useStyles();
	if (!posts || posts.length === 0) 
		return (
		
		<Grid container spacing={5}  >
			<Grid item xs={12} align='center'>
			<Typography>You have not created any posts.</Typography>
			</Grid>
			<Grid item xs={12} align='center'>
			<Button
				href={'/admin/create'}
				variant="contained"
				color="primary"
			>
				New Post
			</Button>
			</Grid>
		</Grid>								
	
		);

	return (
		<React.Fragment>
			<Container maxWidth="md" component="main">
				<Paper className={classes.root}>
					<TableContainer className={classes.container}>
						<Table stickyHeader aria-label="sticky table">
							<TableHead>
								<TableRow>
									<TableCell>
										Create Date
									</TableCell>
									<TableCell align="left">Title</TableCell>
									<TableCell align="left">MyRating</TableCell>
									<TableCell align="left">movieId</TableCell>
								
									<TableCell align="left">Action</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{posts.map((post) => {
									return (
										<TableRow key={post.id}>
											<TableCell component="th" scope="row">
												{moment(post.date).format('YYYY-MM-DD')}
											</TableCell>
										

											<TableCell align="left">
												<Link
													color="textPrimary"
													style={{  cursor: 'pointer',}}
													onClick={()=>{history.push(`/app/${post.tmdbId}`);}}
													className={classes.link}
												>
													{post.title}
												</Link>
											</TableCell>
											<TableCell align="left">{post.rating}</TableCell>
											<TableCell align="left">{post.tmdbId}</TableCell>
											<TableCell align="left">
												{/* <Link
													color="textPrimary"
													href={'/admin/edit/' + post.id}
													className={classes.link}
												>
													<EditIcon></EditIcon>
												</Link> */}
												<Link
													color="textPrimary"
													href={'/admin/delete/' + post.id}
													className={classes.link}
												>
													<DeleteForeverIcon></DeleteForeverIcon>
												</Link>
											</TableCell>
										</TableRow>
									);
								})}
								<TableRow>
									<TableCell colSpan={4} align="right">
										<Button
											href={'/admin/create'}
											variant="contained"
											color="primary"
										>
											New Post
										</Button>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>
			</Container>
			<Container className={classes.cardscontainer} maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{posts.map((post) => {
						return (
							// Enterprise card is full width at sm breakpoint
							<Grid item key={post.id} xs={12} md={4}>
								<Card className={classes.card}>
									
										<CardMedia
											className={classes.cardMedia}
											image={post.image}
											title="Image title"
										/>
								
									<CardContent className={classes.cardContent}>
										<Typography
											gutterBottom
											variant="h6"
											component="h2"
											className={classes.postTitle}
										>
											{post.title.substr(0, 50)}
										</Typography>
										<div className={classes.postText}>
											<Typography color="textSecondary">
												{post.content.substr(0, 40)}
											</Typography>
										</div>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</React.Fragment>
	);
};
export default Posts;
