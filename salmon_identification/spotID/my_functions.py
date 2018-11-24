def extract_circles_from_labelme_json(json_path):
    '''
    Extract center and radious of circles from a json mark file generated with labelme 
    '''
    
    with open(json_path) as f:
        data = json.load(f)
    # P1: circle center; P2: point on circle
    P1 = [p['points'][0] for p in data['shapes']]
    P2 = [p['points'][1] for p in data['shapes']]
    
    # calculate radius
    x_delta = (np.array(P2) - np.array(P1))[:, 0]
    y_delta = (np.array(P2) - np.array(P1))[:, 1]
    R = list(map(math.hypot, x_delta, y_delta))
    
    circles = pd.DataFrame(P1, columns=['x', 'y'])
    circles['r'] = R
    
    return circles