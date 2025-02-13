def filter_list(l):
    filtered_list = []  
    for item in l:  # ვათვალიერებთ ყველა ელემენტს მოცემულ სიაში
        if not isinstance(item, str):  
            filtered_list.append(item) 
    return filtered_list  
