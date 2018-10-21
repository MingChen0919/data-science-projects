# common libraries
import pandas as pd
import numpy as np

# visualization libraries
import matplotlib.pyplot as plt
import seaborn as sns


# read data
train_df = pd.read_csv('input/train.csv', nrows=20000)
train_df.columns