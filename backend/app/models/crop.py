from pydantic import BaseModel, Field

class CropResponse(BaseModel):
    id : str
    nameSi : str
    nameEn : str
    emoji : str
    description : str

class CropListResponse(BaseModel):
    total : int = Field(ge=0)
    crops : list[CropResponse]