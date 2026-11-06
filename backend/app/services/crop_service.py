
from app.models.crop import CropResponse


CROPS = [
    CropResponse(
        id="rice",
        nameSi="වී",
        nameEn="Rice",
        emoji="🌾",
        description="වී වගාව පිළිබඳ මූලික මාර්ගෝපදේශ."
    ),
    CropResponse(
        id="chili",
        nameSi="මිරිස්",
        nameEn="Chili",
        emoji="🌶️",
        description="මිරිස් වගාව පිළිබඳ මූලික මාර්ගෝපදේශ."
    ),
    CropResponse(
        id="tomato",
        nameSi="තක්කාලි",
        nameEn="Tomato",
        emoji="🍅",
        description="තක්කාලි වගාව පිළිබඳ මූලික මාර්ගෝපදේශ."
    )
]

def get_all_crops() -> list[CropResponse]:
    return CROPS.copy()

def get_crop_by_id(crop_id : str) -> CropResponse | None:
    for crop in CROPS:
        if crop.id == crop_id:
            return crop
    return None