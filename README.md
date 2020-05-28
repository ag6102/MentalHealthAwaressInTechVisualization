# MentalHealthAwaressInTechVisualization

## Introduction
Mental health care is as important as physical health care. However, physical medical issues are discussed/ addressed more. This visualization is based on a survey(Kaggle) related to mental health awareness in Tech. The visualization is implemented using d3js.

Dataset and data types:

The dataset being used represents awareness, experience and beliefs of the employers in tech related to mental health care and awareness. The survey contains 352 records of people and 82 columns.

The visualization is based on the following columns of survey:

• Are you self-employed?
• How many employees does your company or organization have?
• Is your employer primarily a tech company/organization?
• Does your employer provide mental health benefits as part of healthcare coverage?
• Do you know the options for mental health care available under your employer-provided health
coverage?
• Has your employer ever formally discussed mental health (for example, as part of a wellness
campaign or other official communication)?
• Overall, how much importance does your employer place on physical health?
• Overall, how much importance does your employer place on mental health?
• Describe the conversation you had with your employer about your mental health, including their
reactions and what actions were taken to address your mental health issue/questions.
• Describe the conversation with co-workers you had about your mental health including their
reactions.
The assignment is an attempt to visualize mental health care awareness in tech industry. The visualization consists of various small visualizations depicting some information. The nature of the visualization will be exploratory in nature. Data is pre-processed to include employee working in tech industry only.

## Description

### Visualization 1: Sentiment Analysis This visualization is based on 2 columns:

• Describe the conversation you had with your employer about your mental health, including their reactions and what actions were taken to address your mental health issue/questions.
• Describe the conversation with co-workers you had about your mental health including their reactions.
The employee’s answer is process using node package to do sentiment analysis. The visualization depicts percentage of employees who are feel happy, neutral and sad respectively. This gives an overall idea that 40% people are satisfied and 28% feel sad after discussion related to mental health care/issues.

### Visualization 2: Word-Cloud - Positive and Negative Words in employee feedback

This visualization shows positive and negative words used in employee’s answers in 2 columns:

• Describe the conversation you had with your employer about your mental health, including their
reactions and what actions were taken to address your mental health issue/questions.
• Describe the conversation with co-workers you had about your mental health including their
reactions.
The positive and negative words are extracted using node package. The size of the words shows the depicts of the positive and negative words. Also, the orange color represents negative words and yellow represents positive words.
  
### Visualization 3: Employee Awareness Regarding Heath Care Coverage and Available Options.

This visualization shows the percentage of employers who covers mental health care, employees who are aware of the options and percentage of organizations who formally address mental health care.

### Visualization 4: Employee Organisation Size Categorization

The visualization represents the distribution of the employees categorized based on company size.

• Small Organization : 26 – 100 employees
• Medium Organization : 100-500 employees
• Large Organization : 500-1000 employees
• Very Large Organization : > 1000 employees
• Unknown

### Visualization 5: Comparison of Employee Awareness Regarding Heath Care Coverage and Available Options over the past years
  
The visualization represents comparison over 5 years(2014, 2016, 2017, 2018, 2019). The chart represents 3 categories:
• Mental health care coverage by employee
• Employees’ awareness about mental health care options available
• Did Employer discussed mental health care formally?
These categories are further classified as :
• Yes
• No
• Don’t know
On hover of the categories, the related data is displayed.

### Visualization 6: Importance your employer place on Physical Health vs Mental Health The visualization represents a line graph, representing each employee and the rating given by each for

• Overall, how much importance does your employer place on physical health?
• Overall, how much importance does your employer place on mental health?

The graph represents the comparison of importance employers’ place on physical health vs mental health. 

Video Link: https://www.youtube.com/watch?v=I1p8X4rvASQ
