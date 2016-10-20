var name = from user in users
           where user.ID == '12345'
           select user.Name;
