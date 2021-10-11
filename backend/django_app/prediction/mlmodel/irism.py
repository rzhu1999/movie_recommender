import pandas as pd
from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from joblib import dump, load

# Creating our Prediction Model
iris = load_iris()

# iris.feature_names
#['sepal length (cm)', 'sepal width (cm)', 'petal length (cm)', 'petal width (cm)']

# iris.target_names
#['setosa' 'versicolor' 'virginica']


# create the feature matrix and target response variable
# Define feature matrix in "X"
X = iris.data

# Define target response vector in "y"
y = iris.target

# create a pandas dataframe object from the feature matrix, 
# to get an idea of the minimum and maximum values of the various features. 
X_df = pd.DataFrame(data=X, columns = iris.feature_names)

# split our data into training and testing splits 
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20, random_state=1, stratify=y)


# train a Random Forest Classifier with the data
clf_rf = RandomForestClassifier(random_state = 1, n_estimators = 10, n_jobs = -1)
estimator_rf = clf_rf
estimator_rf.fit(X=X_train, y=y_train)

# evaluation

# estimator_rf.score(X_test,y_test)
# 0.9666666666666667

# from sklearn.model_selection import cross_val_score
# estimator_cv = clf_rf
# scores = cross_val_score(estimator_cv, X, y, cv = 5, scoring = 'accuracy')
# scores.mean()
# 0.9666666666666668

# Serializing our Prediction Model

dump(estimator_rf, 'IRISRandomForestClassifier.joblib') 

