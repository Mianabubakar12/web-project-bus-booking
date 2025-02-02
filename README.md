# * web-project-bus-booking*
 *Online Bus Ticket Booking System* – A full-stack web application for booking bus tickets, built using *ASP.NET Core (C#) for the backend* and *HTML, CSS, JavaScript for the frontend*.

---

# * Project Overview*
This project is designed to allow users to book bus tickets online, manage reservations, and view available buses.

🔹 *Frontend:* HTML, CSS, JavaScript (Hosted on IIS)  
🔹 *Backend:* ASP.NET Core (C#) with MySQL (Hosted on Windows)  
🔹 *Database:* MySQL  
🔹 *Hosting Environment:* Windows Server / Local Machine  

---

# * Project Structure*

web-project-bus-booking/
│── UI/                     # Frontend (HTML, CSS, JavaScript)
│── Server/                 # Backend (ASP.NET Core C#)
│   ├── Controllers/        # API Controllers
│   ├── Models/             # Database Models
│   ├── Data/               # Database Context
│   ├── Views/              # Razor Views
│   ├── appsettings.json    # Configuration File
│   ├── Program.cs          # Main Entry Point
│── README.md               # Project Documentation


---

# * Setup Instructions*
### * Clone the Repository*
sh
git clone https://github.com/mianabubakar/web-project-bus-booking.git
cd web-project-bus-booking


---

# * Backend Setup on Windows*
# * Step 1: Install Prerequisites*
1. *Install .NET SDK*  
   🔗 [Download .NET SDK](https://dotnet.microsoft.com/en-us/download)  
2. *Install MySQL Server*  
   🔗 [Download MySQL](https://dev.mysql.com/downloads/installer/)  
3. *Install Visual Studio 2022*  
   - Select:  
     ✅ ASP.NET and Web Development  
     ✅ .NET Core Development  
     ✅ Entity Framework  

---

# *✅ Step 2: Create MySQL Database*
1. *Open MySQL Workbench* and run:
sql
CREATE DATABASE BusTicketDB;
CREATE USER 'busticketuser'@'localhost' IDENTIFIED BY 'yourpassword';
GRANT ALL PRIVILEGES ON BusTicketDB.* TO 'busticketuser'@'localhost';
FLUSH PRIVILEGES;

 *Replace yourpassword with a strong password.*

---

## *✅ Step 3: Configure appsettings.json*
Open appsettings.json and update:
json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=BusTicketDB;User=busticketuser;Password=yourpassword;"
  }
}


---

## *✅ Step 4: Run Migrations & Start Backend*
1. *Navigate to the backend folder*:
   sh
   cd Server
   
2. *Run database migrations*:
   sh
   dotnet ef migrations add InitialCreate
   dotnet ef database update
   
3. *Run the backend*:
   sh
   dotnet run
   
✅ *Backend will run at* http://localhost:5000/

---

# *🚀 Hosting Backend on Windows IIS*
## *✅ Step 5: Publish ASP.NET Core Project*
1. Open *Visual Studio*  
2. *Go to* Build > Publish  
3. Select *Folder* as the target  
4. Choose *C:\inetpub\wwwroot\BusTicketBackend* as the output folder  
5. Click *Publish*  

---

## *✅ Step 6: Configure IIS for ASP.NET Core*
1. *Install IIS*  
   - Open Control Panel > Programs > Turn Windows features on or off  
   - Enable:  
      *Internet Information Services (IIS)*  
      *ASP.NET Core Hosting Bundle*  
     🔗 [Download Hosting Bundle](https://dotnet.microsoft.com/en-us/download/dotnet)  

2. *Create a new IIS site*  
   - Open *IIS Manager* (Win + R → `inetmgr)  
   - Right-click *Sites > Add Website*  
   - Set:  
     - *Site Name*: BusTicketBackend  
     - *Physical Path*: C:\inetpub\wwwroot\BusTicketBackend  
     - *Port*: 5000  

3. *Restart IIS*
   sh
   iisreset
   

 Now your backend is hosted on *IIS* at *http://localhost:5000*

---

# * Frontend Setup on Windows (IIS)*
## * Step 7: Deploy Frontend*
1. Copy all files from the UI folder  
2. Paste them into C:\inetpub\wwwroot\BusTicketFrontend  
3. Open *IIS Manager*  
4. Right-click *Sites > Add Website*  
   - *Site Name*: BusTicketFrontend  
   - *Physical Path*: C:\inetpub\wwwroot\BusTicketFrontend  
   - *Port*: 80  
5. Click *OK*, then restart IIS:
   sh
   iisreset
   

✅ Now your frontend is hosted at *http://localhost/*

---

# * API Endpoints*
| HTTP Method | Endpoint         | Description |
|------------|-----------------|-------------|
| GET        | /api/bus       | Get all buses |
| POST       | /api/bus       | Add new bus  |

 *Test API Using Postman or Browser*  
- *GET*: http://localhost:5000/api/bus
- *POST*:
  json
  {
    "name": "Express Bus",
    "capacity": 50
  }

# * Deployment on Windows Server*
  *Enable IIS Service to Start on Boot*
sh
sc config W3SVC start= auto
net start W3SVC

*Run ASP.NET Core in Background*
sh
dotnet BusTicketBookingAPI.dll &
---
# *👨‍💻 Developed By*
🚀 *UCP Tigers
📧 Contact: 03470914934
