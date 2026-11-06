
from fastapi import APIRouter, HTTPException

from app.models.crop import (CropResponse,CropListResponse)

from app.services.crop_service import (get_all_crops,get_crop_by_id)


router = APIRouter(prefix="/api/crops",tags=["crops"])


@router.get("", response_model=CropListResponse)
def list_crops():
    crops = get_all_crops()

    return CropListResponse(
        total=len(crops),
        crops=crops
    )

@router.get("/{crop_id}", response_model=CropResponse)
def crop_details(crop_id : str):
    crop = get_crop_by_id(crop_id)

    if crop is None:
        raise HTTPException(status_code=404, detail='Crop not found')
    return crop