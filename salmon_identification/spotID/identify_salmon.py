#%% Import libraries
import numpy as np
import pandas as pd

import seaborn as sns
import matplotlib.pylab as plt

#%% Import image processing libraries
import cv2
import skimage


#%% Read images
img_1707cs = cv2.imread('train/1707cs.jpg', 0)
plt.imshow(img_1707cs)
plt.show()

#%% random walker segmentation
from skimage.segmentation import random_walker
from skimage.exposure import rescale_intensity


#%%
img_1707cs = plt.imread('train/1707cs.jpg')[325:955, 155:745]
sigma = 0
img_1707cs = rescale_intensity(img_1707cs, in_range=(0, 180))
plt.imshow(img_1707cs)
plt.show()



#%%
from scipy import ndimage as ndi
from skimage.feature import peak_local_max
from skimage.morphology import watershed

distance = ndi.distance_transform_edt(img_1707cs)
local_maxi = peak_local_max(distance, indices=False, footprint=np.ones((3, 3)),
                            labels=img_1707cs)
markers = ndi.label(local_maxi)[0]
labels = watershed(-distance, markers, mask=img_1707cs)

plt.imshow(labels)
plt.show()

#%% the range of binary image image spans over (-1, 1)
# We choose the hottest and the coldest pixels as maskers
markers = np.zeros(img_1707cs.shape)
# markers[img_1707cs < 10] = 1
# markers[img_1707cs > 245] = 2

#%%
labels = random_walker(img_1707cs, markers)
plt.imshow(labels)
plt.show()


