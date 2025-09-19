from datetime import time

def find_free_slots(occupied_slots):
    day_hours = [(time(hour), time(hour + 1)) for hour in range(8, 18)]
    free_slots = []
    for slot in day_hours:
        if not any(start < slot[1] and end > slot[0] for start, end in occupied_slots):
            free_slots.append(slot)
    return free_slots


