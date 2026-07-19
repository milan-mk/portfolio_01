from pydantic import BaseModel, EmailStr, field_validator
from email_validator import validate_email, EmailNotValidError 

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str

    @field_validator("email")
    @classmethod
    def validate_email_deliverable(cls,value):
        try:
            validated=validate_email(value, check_deliverability=True)
            return validated.normalized
        except EmailNotValidError as e:
            raise ValueError(str(e))
