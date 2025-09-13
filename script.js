// File data - your uploaded files
const files = [
    { name: "README.md", type: "document", date: "2 hours ago" },
    { name: "faxicon.ico", type: "image", date: "2 hours ago" },
    { name: "index.html", type: "code", date: "16 minutes ago" },
    { name: "script.js", type: "code", date: "10 minutes ago" },
    { name: "style.css", type: "code", date: "15 minutes ago" }
];

// Function to display files in grid view
function displayFilesGrid() {
    const fileGrid = document.getElementById('fileDisplay');
    fileGrid.className = 'file-grid';
    fileGrid.innerHTML = '';
    
    files.forEach(file => {
        const fileCard = document.createElement('div');
        fileCard.className = 'file-card';
        
        // Determine icon based on file type
        let iconClass = 'fa-file';
        if (file.type === 'image') iconClass = 'fa-file-image';
        if (file.type === 'code') iconClass = 'fa-file-code';
        if (file.type === 'document') iconClass = 'fa-file-alt';
        
        fileCard.innerHTML = `
            <div class="file-icon">
                <i class="fas ${iconClass}"></i>
            </div>
            <div class="file-name">${file.name}</div>
            <div class="file-date">Updated ${file.date}</div>
        `;
        
        fileGrid.appendChild(fileCard);
    });
}

// Function to display files in list view
function displayFilesList() {
    const fileGrid = document.getElementById('fileDisplay');
    fileGrid.className = 'file-list';
    fileGrid.innerHTML = '';
    
    files.forEach(file => {
        const listItem = document.createElement('div');
        listItem.className = 'file-list-item';
        
        // Determine icon based on file type
        let iconClass = 'fa-file';
        if (file.type === 'image') iconClass = 'fa-file-image';
        if (file.type === 'code') iconClass = 'fa-file-code';
        if (file.type === 'document') iconClass = 'fa-file-alt';
        
        listItem.innerHTML = `
            <div class="file-list-icon">
                <i class="fas ${iconClass}"></i>
            </div>
            <div class="file-list-info">
                <div class="file-list-name">${file.name}</div>
                <div class="file-list-date">Updated ${file.date}</div>
            </div>
            <a href="#" class="file-list-view">View</a>
        `;
        
        fileGrid.appendChild(listItem);
    });
}

// Toggle between grid and list view
let isGridView = true;
document.getElementById('viewToggle').addEventListener('click', function() {
    isGridView = !isGridView;
    
    if (isGridView) {
        displayFilesGrid();
        this.innerHTML = '<i class="fas fa-list"></i> List View';
    } else {
        displayFilesList();
        this.innerHTML = '<i class="fas fa-th"></i> Grid View';
    }
});

// Initialize with grid view when page loads
document.addEventListener('DOMContentLoaded', function() {
    displayFilesGrid();
});
