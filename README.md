# EduBridge

**Learn It. See It. Use It.**

EduBridge is a Flask + SQLite educational web application that connects school concepts with real-world applications.

## Features

- Premium responsive landing page
- Topic library
- Quick revision
- Real-world use cases
- How & When guidance
- Interactive application questions
- SQLite progress tracking
- My Progress dashboard
- Reset progress
- Flask backend
- Clean Jinja templates
- Responsive mobile design

## Folder structure

```text
EduBridge/
├── app.py
├── database.db          # created automatically on first run
├── requirements.txt
├── .gitignore
├── README.md
├── data/
├── static/
│   ├── style.css
│   └── script.js
└── templates/
    ├── base.html
    ├── index.html
    ├── topic.html
    ├── progress.html
    └── 404.html
```

## Run

### 1. Create/activate virtual environment

Windows:

```bash
python -m venv venv
venv\Scripts\activate
```

### 2. Install Flask

```bash
pip install -r requirements.txt
```

### 3. Start

```bash
python app.py
```

### 4. Open

```text
http://127.0.0.1:5000
```

The SQLite database and tables are created automatically.
