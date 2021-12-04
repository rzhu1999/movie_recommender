import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';

function PostLoading(Component) {
	return function PostLoadingComponent({ isLoading, ...props }) {
		if (!isLoading) return <Component {...props} />;
		return (
		<Grid container display='flex' justifyContent='center' alignitem='center' >
			<CircularProgress />
		</Grid>
		);
	};
}
export default PostLoading;
