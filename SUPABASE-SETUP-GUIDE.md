# 🚌 VEL TECH BUS MANAGEMENT - SUPABASE SETUP GUIDE

## 📋 **STEP-BY-STEP SETUP INSTRUCTIONS**

### **1. 🗄️ CREATE DATABASE TABLES**

#### **Option A: Using Supabase Dashboard (Recommended)**
1. **Login to Supabase Dashboard**: Go to [supabase.com](https://supabase.com) and login
2. **Select Your Project**: Choose your project (`nlzneuelzgbrkevcbcxw`)
3. **Go to SQL Editor**: Click on "SQL Editor" in the left sidebar
4. **Create New Query**: Click "New Query"
5. **Copy & Paste**: Copy the entire content from `supabase-schema-complete.sql`
6. **Run Query**: Click "Run" button (or press Ctrl+Enter)

#### **Option B: Using Supabase CLI**
```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref nlzneuelzgbrkevcbcxw

# Run the schema
supabase db reset --file supabase-schema-complete.sql
```

### **2. 🔐 CONFIGURE ROW LEVEL SECURITY (RLS)**

The SQL schema automatically creates all necessary RLS policies, but verify they exist:

#### **Check RLS Status:**
1. Go to **Authentication** → **Policies** in Supabase Dashboard
2. Verify these tables have RLS enabled:
   - ✅ `student_logins`
   - ✅ `admin_credentials`
   - ✅ `bus_routes`
   - ✅ `bus_stops`
   - ✅ `route_stops`
   - ✅ `admin_notes`

#### **Verify Anonymous Access:**
1. Go to **Settings** → **API**
2. Ensure **Anonymous Key** is enabled
3. Check that **Row Level Security** is enabled for all tables

### **3. 📊 DATABASE TABLES CREATED**

| Table Name | Purpose | Key Features |
|------------|---------|--------------|
| `student_logins` | Track student login events | Email, Student ID, Timestamp |
| `admin_credentials` | Admin authentication | Username, Password, Phone |
| `bus_routes` | Bus route information | Route number, name, distance, duration |
| `bus_stops` | Bus stop locations | Stop code, name, GPS coordinates |
| `route_stops` | Route-stop mapping | Sequence order, timing, pickup/drop points |
| `admin_notes` | Admin notes and announcements | Priority, category, importance |

### **4. 🎯 SAMPLE DATA INCLUDED**

The schema automatically inserts:

#### **Default Admin Account:**
- **Username**: `admin`
- **Password**: `admin`
- **Phone**: `+917207509620`

#### **Sample Bus Routes:**
- **R001**: Campus to City Center (15.5 km, 45 min)
- **R002**: Campus to Railway Station (12.0 km, 35 min)
- **R003**: Campus to Airport (25.0 km, 60 min)

#### **Sample Bus Stops:**
- **ST001**: University Main Gate
- **ST002**: City Center Mall
- **ST003**: Railway Station
- **ST004**: Airport Terminal
- **ST005**: Tech Park

#### **Sample Admin Notes:**
- System maintenance schedules
- Route updates
- Fleet additions
- Student feedback

### **5. 🔧 CONNECTION VERIFICATION**

#### **Test Database Connection:**
1. Open `admin-login.html` in your browser
2. Look for the **Connection Status** indicator:
   - 🟢 **Green**: Supabase connected successfully
   - 🟡 **Yellow**: Supabase connected but with warnings
   - 🔴 **Red**: Supabase connection failed (will use localStorage fallback)

#### **Debug Connection Issues:**
1. Click **"Test Connection Again"** button
2. Check browser console for detailed logs
3. Verify your Supabase URL and Anonymous Key

### **6. 🚀 SYSTEM FEATURES**

#### **With Supabase Connected:**
- ✅ **Real-time data persistence**
- ✅ **Multi-user access**
- ✅ **Data backup and recovery**
- ✅ **Advanced querying capabilities**
- ✅ **Admin login with phone recovery**
- ✅ **Student login tracking**
- ✅ **Route and stop management**
- ✅ **Admin notes system**

#### **Without Supabase (Fallback Mode):**
- ✅ **Local storage authentication**
- ✅ **Basic functionality maintained**
- ✅ **No data loss**
- ✅ **Offline operation**

### **7. 🛠️ TROUBLESHOOTING**

#### **Common Issues:**

**❌ "Table doesn't exist" Error:**
- **Solution**: Run the complete SQL schema again
- **Check**: Verify table names in Supabase Dashboard

**❌ "Permission denied" Error:**
- **Solution**: Check RLS policies are created correctly
- **Verify**: Anonymous access is enabled

**❌ "Connection failed" Error:**
- **Check**: Supabase URL and Anonymous Key
- **Verify**: Project is active and not paused
- **Test**: Use Supabase Dashboard to verify connection

**❌ "Admin login not working":**
- **Check**: Default admin credentials are inserted
- **Verify**: Phone number format (+917207509620)
- **Test**: Try password recovery with phone

### **8. 📱 ADMIN LOGIN CREDENTIALS**

| Field | Value |
|-------|-------|
| **Username** | `admin` |
| **Password** | `admin` |
| **Phone** | `+917207509620` |

### **9. 🔄 NEXT STEPS**

1. **✅ Run the SQL schema** in Supabase Dashboard
2. **✅ Verify RLS policies** are created
3. **✅ Test admin login** with default credentials
4. **✅ Test password recovery** with phone number
5. **✅ Check connection status** in admin interface
6. **✅ Add your own routes and stops** as needed

### **10. 📞 SUPPORT**

If you encounter any issues:
1. Check the browser console for error messages
2. Verify Supabase project settings
3. Test with the debug panel in admin-login.html
4. Ensure all RLS policies are properly configured

---

## 🎉 **SETUP COMPLETE!**

Your Vel Tech Bus Management System is now ready with full Supabase integration! The system will work perfectly regardless of connection status, but you'll get better performance and data persistence when Supabase is connected.
