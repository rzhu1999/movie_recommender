# NextFlex
![Screen Shot 2022-02-06 at 9 26 20 PM](https://user-images.githubusercontent.com/80583153/152729323-0e16bc16-be43-472e-84c3-5ff373786f29.png)


## 1. Description 

NextFlex is a cloud-based interactive movie recommendation system. It generally has 2 main features: browsing movie data and getting movie recommendations. The users can explore the movie dataset without any constraint as a guest. When they register into our system, they can ask NextFlex for personalized recommendations or post their own ratings and upload images.

The user will basically have 4 options for getting recommendations
* A: Get the latest or popular movies list.
* B: Get top-rated movies based on our top ranking model (**Global**).
* C: Get most similar k movies based on a given movie title and number k (**Content-based**).
* D: Get personalized recommendations based on user ratings (**Collaborative Filtering**).

## 2. Datasets

We mainly use The movies datasets from [Kaggle](https://www.kaggle.com/rounakbanik/the-movies-dataset), and we have done data cleaning, filtering, merging with these datasets.


## 3. Architecture
![Screen Shot 2022-02-06 at 9 24 35 PM](https://user-images.githubusercontent.com/80583153/152729171-576ea85b-ff2c-48ed-a7ee-4f1901bb188d.png)

### a. Frontend
We built our frontend with React. All the web pages are created by Javascript. In addition, we design the web page with Material ui components, such as icons, buttons, tables, etc. 
To make the system more user friendly, we use TMDB API to fetch the movie data including poster images links, and then we use React to parse the json object to show movie data on the web page.  


### b. Backend

The backend is a combination of ```Django REST framework``` and ```Recommendation engine```.

#### i) Django backend & bridge to the frontend
We set up the backend with the Django REST framework. We use Axios as a bridge between the frontend and backend. By sending ```POST``` or ```GET``` requests to the Djdango API, the frontend will receive responses in the form of JSON objects. And then React will parse the JSON object and convert it into data in the web page.

#### ii) Machine Learning Engine
Since we created the machine learning engine with python libraries such as pandas and sklearn, the recommender engine is built in the Django backend.

As we stated above, we have built three corresponding prediction functions using Python and Spark: we use ```weighted average matrix``` for Global recommendations, ```cosine similarity matrix``` for Content-based recommendations, and an ```Alternating Least Squares (ALS) model``` from Spark for Collaborative filtering. The reason we choose Spark over pandas is due to the size of our original rating dataset (1.13GB), which can be processed & exported more easily through Spark & Hadoop. 

### c. Cloud Database

Since Django natively uses a relational database, we use AWS RDS to set up the MySQL database for Django’s data management, such as saving the posts data that users upload:

![Screen Shot 2022-02-06 at 9 30 01 PM](https://user-images.githubusercontent.com/80583153/152729731-8cd77455-37ec-41e1-80fb-6dadfd3e055c.png)

## 4. Functions

NextFlex has different types of functions:

### a. User Authentication

We build the user authentication functions with Redux on the frontend. Redux will store the user login information in the local session. On the backend, we use Django’s djoser package and JWT(Json Web Tokens). Each GET or POST request needs to have a header with the authentication tokens a logined user received, and Axios handles this job automatically.

### b. Uploading data

Users can either rate existing movies in the dataset, or rate their favorite movies by posting their data and uploading images to the cloud database. 
We also add a function to extract meta of the images. When a user uploads an image, the system will automatically get the image’s metadata such as width, height, size, name, dates, etc.

### c. Feature Extractions & Recommendations


As we stated, NEXTFLEX is an interactive movie recommendation system. All the recommendation functions can be easily called by the users’ inputs or clicks, intuitively and user friendly.
* Option A:  **Get the latest or popular movies list**
    
    The TMDB API movie recommendation is the simplest function. Users can easily browse the movie lists with beautiful posters showing in the UI.
The other three recommendation engines will be called by user interactions. 

* Option B: **Get top-rated movies**
    
    This recommender is based on our top ranking model of all the users’ ratings. 
    It simply takes the average of global user ratings by querying S3. But we want to add some weight here: if a movie is pretty new, it won’t have too many user ratings, but if that movie is actually pretty good, we don’t want to downgrade it just because it has fewer ratings. We also ignore movies with extremely small amounts of ratings, and consider the first 90% films.

* Option C: **Get most similar k movies**
    
    This recommendation is based on the dataset called movies metadata. The user will input a movie title and a number k to recommend. The recommender will basically try to find movies that are most similar to the user specified movie. It first queries S3 and reads the csv dataset, and then uses pandas for data processing: extracting key attributes such as crews, directors, genres, etc. Then it creates a soup by merging all extracted features into one single feature, ready to use for sklearn. Finally we bring in sklearn to calculate the cosine similarity matrix, sort it, and output the top results.
Here it is mentionable that when the Django server starts on the backend, the recommender engine will automatically run and compute the cosine similarity matrix for only once. When this job is finished, the server will hold the ML features in memory and wait for requests from the frontend, so the result will be shown on the UI instantly.

* Option D: **Get personalized recommendations based on user ratings**
    
    The last recommender uses the current logged-in user’s rating to recommend. It mainly brings in an ALS Model from spark to do the job. ALS Model is a commonly-used, powerful yet simple model for collaborative filtering. Another reason we choose Spark over Pandas is that our original rating dataset is relatively large (1.13GB), which can be processed and exported more easily through Spark & Hadoop. 
	We first trained our ALS Model via google colab for the reason of instant code sharing between teammates. We fed the ALS Model with three attributes: user_id, movie_id, and user_rating. Since we have more than 270,000 data points, we are very confident that we will have a decent model. 
	We then test and evaluate our ALS Model, export it, and upload it to S3 database. So each time a user asks for a recommendation based on his/her own rating we call the model & return the top-ranked movies. 

## 5. UI 
* Trending
    
    ![Screen Shot 2022-02-06 at 9 38 14 PM](https://user-images.githubusercontent.com/80583153/152730955-3ee2c123-1592-4252-a083-799ba2ef4d83.png)
* Movie Detail
    
    ![Screen Shot 2022-02-06 at 9 42 54 PM](https://user-images.githubusercontent.com/80583153/152731038-661c3389-7d47-4fac-b0fb-b628b9ea9882.png)
* Register
    
    ![Screen Shot 2022-02-06 at 9 38 29 PM](https://user-images.githubusercontent.com/80583153/152731113-73012bc0-9086-4790-b966-1c02408712ac.png)
* Database DashBoard
    
    ![Screen Shot 2022-02-06 at 9 38 42 PM](https://user-images.githubusercontent.com/80583153/152731202-78a937cd-fde3-4fd5-8d39-3f613f07276c.png)
* Recommendation
    
    ![Screen Shot 2022-02-06 at 9 39 01 PM](https://user-images.githubusercontent.com/80583153/152731275-c5dc35c2-7c93-4d6a-ae71-510f9a209d6f.png)
* Upload
    
    ![Screen Shot 2022-02-06 at 9 39 07 PM](https://user-images.githubusercontent.com/80583153/152731323-7c2c04af-e23c-46b2-996a-5a37c7ed4511.png)


## 6. Software and Libraries
* CloudDB: 

    AWS S3: For datasets storage, AWS RDS: For Django database

* Data Processing & Recommender Engine:
    
    Pandas, Numpy, Sklearn, Pyspark, Spark ALS

* UI design: 
    Django REST framework / Djoser JWT, React, Material-UI, Redux, Axios, TMDB API
