---
title: My Typical Data Analysis Workflow
date: 2020-12-28T12:51:00.000Z
---

An overview of my typical process for working through a new dataset for the purposes of cleaning, processing and wrangling with the aim of predicting a dependent variable. 

<!-- more -->

When looking at a new dataset for the purposes of creating a machine learning or neural network model, I typically start off with a similar approach such that I can gain a basic understanding of the dataset. 

For the purposes of this article, I'll pull a dataset from Kaggle as an example. I tried to find something a little interesting - at least to me - so
I found the [Rain in Australia dataset](https://www.kaggle.com/jsphyg/weather-dataset-rattle-package) that is to be used for predicting if given a n days weather conditions, will it rain the n+1 day. This is a classification task, based on a yes/no.  

With this dataset being pulled from Kaggle, the dataset quality is already quite good and has minimal cleaning required for use. I might consider dedicating a future post to the methods I undertake in cleaning a terrible dataset (usually the ones I create from web scraping...).

## Initial Overview

I love the functionality of pandas profiling - it produces a wonderfully interactive report that covers 90% of my inital needs. In the case of our dataset, the report is generated with only minimal lines of code.


```python
import pandas as pd
from pandas_profiling import ProfileReport

rainfall_df = pd.read_csv(r"C:\Users\Kendall\Downloads\weatherAUS.csv\weatherAUS.csv")
rainfall_profile = ProfileReport(rainfall_df, title="Australian Rainfall")
```

The profile object is created, however the visualisation of the data still needs to be created. This will be created depending on the output type that is chosen.  A pandas profile report can be generated and output to many different types, including both inline with a Jupyter Notebook or to a interactive HTML file.

```python
# For outputting in the Jupyter Notebook
rainfall_profile.to_widgets()
# For outputting as HTML file
rainfall_profile.to_file("rainfall_profile_report.html")
```

As this is my personal site - I can use the raw HTML output to great effect and add it here for an interactive web accessible view. However for 
the sake of not making you download megabytes worth of data, I've got the example report generated from only the Hobart data. I have also generated a "minimal" report, which does not include the correlations and interactions. 

<iframe src="/rainfall_report.html" height="700" title="Rainfall Report Iframe"></iframe>

This report - for me - starts as a good overview for a dataset, letting me get a grasp on the distribution of values for each variable, as well as the correlations and interactions between each. In this example, and only considering the Hobart data for now, we can look at the different variables to understand the structure of each. 

![Pandas Profile Overview](https://github.com/kmsherrin/readme_pictures/blob/main/pandas-profile-overview.png?raw=true])

For starters we get a basic summary of the dataset. We have 24 variables with 3191 observations, made up of 17 number variables, 5 categorical and 2 boolean variables (rain today and tomorrow). With the overview we can also see that there is 3.3% of cells missing, which may need to be dealt with - or those rows potentially removed. The weather data spans close to a 10 year period, from 2008 to 2017.

Clicking into the warnings tab allows us to see if there are any significant problems with the dataset. In this instance, our issue of the missing values is mostly identified as *Cloud9am* and *Cloud3pm* are missing approximately 1160 entries. 


Take a look at the Wind Gust Dir variable details in the interactive report, here we can see the distribution of the wind directions for Hobart. There is a significant bias with approximately 30% of all the wind coming from the NNW/NW. Let's combine the wind direction and wind speed data and create a windrose plot - just to get an idea of the general trends.

![Hobart Windrose plot](/images/articles/polar_plot.svg)



With this dataset from Kaggle, there isn't much cleaning and no real wrangling required, however there are a few things to check before we step along to modelling.



<br>


## Modelling
Coming Soon 

But also checkout the lazypredict package - it is amazing :)



