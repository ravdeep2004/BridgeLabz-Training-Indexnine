import re 
class UserRegistration:
    def register(self, username, password):
        if not username.isalnum():
            raise ValueError("username is not alpha numeric")
        
        if len(password) < 8:
            raise ValueError("Password is not at least 8 characters long")
        
        if not any(char.isdigit() for char in password):
            raise ValueError("Password not having at least one digit")
        
        if not re.search(r"[!@#$%^&*(),.?\":{}|<>]", password):
            raise ValueError("Password not having at least one special character")
        
        return "no error, user registered "

user = UserRegistration()

a = input("Give your username")
b = input("Give password")

print(user.register(a, b))