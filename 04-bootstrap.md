---
marp: true
theme: default
size: 16:9
paginate: true
title: สร้างเว็บ Static ด้วย Bootstrap
description: xxx
backgroundImage: url('wallpaper-1.jpg')
backgroundSize: cover
footer: "INF67-175 Web Development | บทที่ 4: สร้างเว็บ Static ด้วย Bootstrap"
style: |
  section {
    color: blue; /* สีตัวอักษรทั้งหมด */
  }
  h1 {
    color: black;
    font-size: 56px !important;
    line-height: 1.1;
    margin: 0.2em 0 0.4em;
    
  }
  h2 {
    color: black;
    font-size: 56px !important;
    line-height: 1.1;
    margin: 0.2em 0 0.4em;
    
  }
  h3 {
    color: black;
  }

---

# 🧱 บทที่ 3  
## สร้างเว็บ Static ด้วย Bootstrap

**รายวิชา:** INF67-175 Web Development
**เป้าหมาย:** จัด Layout และทำเว็บให้ responsive อย่างรวดเร็ว

---

## 🎯 จุดประสงค์การเรียนรู้

เมื่อจบวันนี้ ผู้เรียนสามารถ…
1) อธิบายแนวคิดและประโยชน์ของ **Bootstrap**  
2) ใช้ **Grid 12 คอลัมน์** จัด Layout  
3) ใช้ **Utility Classes** เพื่อ spacing, alignment, สี  
4) ใช้ **Components** พื้นฐาน: Navbar, Card, Button, Table, Modal  
5) สร้างหน้าเว็บ **responsive** ดูดีทั้งมือถือและคอม

---

## 🚀 ทำไมต้อง Bootstrap?

- เร็ว: มี style และ component พร้อมใช้  
- สวย: ดีไซน์มาตรฐาน ใช้งานจริงได้  
- รองรับหลายหน้าจอ: mobile-first

**ติดตั้งผ่าน CDN (แนะนำ)**
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
````

---

## 🧩 โครงหน้าเพจพื้นฐาน (Bootstrap Page)

```html
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>My Bootstrap Page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1"> <!-- สำคัญ! -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
  <div class="container py-4">
    <h1 class="text-center text-primary">ยินดีต้อนรับสู่ Bootstrap 🎉</h1>
    <p class="text-center text-muted">เว็บนี้ใช้ Grid + Components</p>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---

## 🧱 หลักการ Grid System

* ใช้โครง: `.container` → `.row` → `.col-*`
* **12 คอลัมน์** ต่อหนึ่งแถว
* **Responsive** ด้วย breakpoint: `-sm`, `-md`, `-lg`, `-xl`, `-xxl`

```html
<div class="container text-center">
  <div class="row g-3">
    <div class="col-12 col-md-6 col-lg-4 bg-info p-3">1</div>
    <div class="col-12 col-md-6 col-lg-4 bg-warning p-3">2</div>
    <div class="col-12 col-md-12 col-lg-4 bg-success p-3">3</div>
  </div>
</div>
```

---

## 📱 Breakpoints ที่ควรรู้

| คำต่อท้าย | หน้าจอกว้าง ≥ | ตัวอย่าง    |
| --------- | ------------- | ----------- |
| `-sm`     | 576px         | `col-sm-6`  |
| `-md`     | 768px         | `col-md-4`  |
| `-lg`     | 992px         | `col-lg-3`  |
| `-xl`     | 1200px        | `col-xl-2`  |
| `-xxl`    | 1400px        | `col-xxl-1` |

💡 ถ้าไม่ใส่ prefix (เช่น `col-12`) = ใช้กับจอทุกขนาด

---

## 🔧 Utility Classes ยอดฮิต

| กลุ่ม         | ตัวอย่าง                                                  | ใช้ทำอะไร             |
| ------------- | --------------------------------------------------------- | --------------------- |
| Spacing       | `mt-3`, `mb-4`, `p-2`, `px-3`                             | margin / padding      |
| Text          | `text-center`, `fw-bold`, `text-primary`                  | จัดแนว / น้ำหนัก / สี |
| Background    | `bg-light`, `bg-dark`, `bg-warning`                       | สีพื้นหลัง            |
| Flex          | `d-flex`, `justify-content-between`, `align-items-center` | จัด layout            |
| Border/Shadow | `border`, `rounded`, `shadow`                             | ขอบ / มุมโค้ง / เงา   |

```html
<div class="p-3 my-3 bg-white border rounded shadow">
  เนื้อหาพร้อม spacing และเงา
</div>
```

---

## 🧭 Navbar (เมนูนำทาง)

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand fw-bold" href="#">MySite</a>
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mainNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="mainNav" class="collapse navbar-collapse">
      <div class="navbar-nav ms-auto">
        <a class="nav-link active" href="#">Home</a>
        <a class="nav-link" href="#">About</a>
        <a class="nav-link" href="#">Contact</a>
      </div>
    </div>
  </div>
</nav>
```

---

## 🃏 Card (กล่องข้อมูลสวย ๆ)

```html
<div class="card h-100">
  <img src="event.jpg" class="card-img-top" alt="กิจกรรม">
  <div class="card-body">
    <h5 class="card-title">กีฬาเฟรชชี่</h5>
    <p class="card-text text-muted">ร่วมสนุกกับการแข่งขันและเชื่อมเพื่อนใหม่</p>
    <a href="#" class="btn btn-primary">รายละเอียด</a>
  </div>
</div>
```

💡 ใช้ร่วมกับ Grid ทำเป็น “การ์ด 3 ใบใน 1 แถว” ได้

---

## 🧩 ตัวอย่าง Card + Grid

```html
<div class="container my-4">
  <div class="row g-4">
    <div class="col-12 col-md-6 col-lg-4">
      <!-- วาง .card ตามสไลด์ก่อนหน้า -->
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <!-- card 2 -->
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      <!-- card 3 -->
    </div>
  </div>
</div>
```

---

## 📊 Table (พร้อมสไตล์)

```html
<table class="table table-striped table-hover align-middle">
  <thead class="table-dark">
    <tr><th>ชื่อกิจกรรม</th><th>วันที่</th><th>สถานที่</th></tr>
  </thead>
  <tbody>
    <tr><td>กีฬาเฟรชชี่</td><td>10 พ.ย. 2025</td><td>สนามกีฬา</td></tr>
    <tr><td>ประกวดสตาร์ทอัพ</td><td>15 พ.ย. 2025</td><td>ฮอลล์ A</td></tr>
  </tbody>
</table>
```

---

## 🔘 ปุ่ม (Buttons)

```html
<button class="btn btn-primary">บันทึก</button>
<button class="btn btn-outline-success">ยืนยัน</button>
<button class="btn btn-danger">ลบ</button>
```

Tip: ใช้ `btn-sm`, `btn-lg`, หรือ `w-100` สำหรับขนาด/ความกว้าง

---

## 🪟 Modal (กล่องแจ้งเตือน/รายละเอียด)

```html
<button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#infoModal">
  ดูรายละเอียด
</button>

<div class="modal fade" id="infoModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content p-3">
      <h5 class="mb-2">ประกาศสำคัญ</h5>
      <p class="mb-0">พรุ่งนี้มีซ้อมใหญ่เวลา 9:00 น.</p>
    </div>
  </div>
</div>
```

---

## 🧪 Mini Demo: Hero + Cards + Footer

```html
<header class="bg-primary text-white text-center py-5">
  <h1 class="mb-1">กิจกรรมมหาวิทยาลัย</h1>
  <p class="mb-0">ค้นหากิจกรรมที่เหมาะกับคุณ</p>
</header>

<main class="container my-5">
  <div class="row g-4">
    <div class="col-md-4"><div class="card h-100">…</div></div>
    <div class="col-md-4"><div class="card h-100">…</div></div>
    <div class="col-md-4"><div class="card h-100">…</div></div>
  </div>
</main>

<footer class="bg-dark text-white text-center py-3">
  © 2025 มหาวิทยาลัยตัวอย่าง
</footer>
```
---
