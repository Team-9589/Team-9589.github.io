    // Function to toggle sidebar visibility
    function toggleSidebar() {
        var sidebar = document.getElementById('sidebar');
        var sidebarContainer = document.querySelector('.sidebar-container');

        sidebar.classList.toggle('show');

        if (sidebar.classList.contains('show')) {
            sidebarContainer.style.marginLeft = '0';
        } else {
            sidebarContainer.style.marginLeft = '-200px';
        }
    }

    // Function to open a specific tab and hide others
    function openTab(tabId) {
        var sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('show');

        var sidebarContainer = document.querySelector('.sidebar-container');
        sidebarContainer.style.marginLeft = '-200px';
        var contentDivs = document.querySelectorAll('.content > div');
        contentDivs.forEach(function(div) {
            div.style.display = 'none';
        });
        var tabs = document.querySelectorAll('.tab');
        tabs.forEach(function(tab) {
            tab.classList.remove('active');
        });
        var selectedTab = document.getElementById(tabId);
        if (selectedTab) {
            selectedTab.style.display = 'block';
        }
        var clickedTab = document.getElementById(tabId + '-tab');
        if (clickedTab) {
            clickedTab.classList.add('active');
        }
    }
    // Function to set default tab on page load
    document.addEventListener('DOMContentLoaded', function() {
        // Open the HomeTab by default
        openTab('HomeTab');
    });
    // Function to scroll to top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll
        });
    }
    function scrollToHome() {
        var homeTab = document.getElementById('HomeTab');
        if (homeTab) {
            homeTab.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Show or hide back-to-top button based on scroll position
    window.addEventListener('scroll', function() {
        var button = document.querySelector('.back-to-top');
        if (window.scrollY > 300) { // Adjust the threshold as needed
            button.classList.add('show');
        } else {
            button.classList.remove('show');
        }
    });
    // Attach click event to back-to-top button
    document.querySelector('.back-to-top').addEventListener('click', function(e) {
        e.preventDefault();
        scrollToTop();
    });

    // Event listener for when the "Team Photos" tab is clicked
    document.getElementById('tab5-tab').addEventListener('click', openPhotosTab);

    // Function to toggle sidebar visibility
    function toggleSidebar() {
        var sidebar = document.getElementById('sidebar');
        var sidebarContainer = document.querySelector('.sidebar-container');

        sidebar.classList.toggle('show');

        if (sidebar.classList.contains('show')) {
            sidebarContainer.style.marginLeft = '0';
        } else {
            sidebarContainer.style.marginLeft = '-200px';
        }
    }

    // Function to open a specific tab and hide others
    function openTab(tabId) {
        var sidebar = document.getElementById('sidebar');
        sidebar.classList.remove('show');

        var sidebarContainer = document.querySelector('.sidebar-container');
        sidebarContainer.style.marginLeft = '-200px';

        var contentDivs = document.querySelectorAll('.content > div');
        contentDivs.forEach(function(div) {
            div.style.display = 'none';
        });

        var tabs = document.querySelectorAll('.tab');
        tabs.forEach(function(tab) {
            tab.classList.remove('active');
        });

        var selectedTab = document.getElementById(tabId);
        if (selectedTab) {
            selectedTab.style.display = 'block';
        }

        var clickedTab = document.getElementById(tabId + '-tab');
        if (clickedTab) {
            clickedTab.classList.add('active');
        }
    }

    // Function to set default tab on page load
    document.addEventListener('DOMContentLoaded', function() {
        // Open the HomeTab by default
        openTab('HomeTab');
    });

    // Function to scroll to top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll
        });
    }

    // Show or hide back-to-top button based on scroll position
    window.addEventListener('scroll', function() {
        var button = document.querySelector('.back-to-top');
        if (window.scrollY > 300) { // Adjust the threshold as needed
            button.classList.add('show');
        } else {
            button.classList.remove('show');
        }
    });

    // Attach click event to back-to-top button
    document.querySelector('.back-to-top').addEventListener('click', function(e) {
        e.preventDefault();
        scrollToTop();
    });
    function toggleMoneyText() {
        var moneyText = document.getElementById('money-text');
        var moneyDetails = document.getElementById('MoneyBreakdownDropbox');
        var toggleLink = document.getElementById('toggle-link');

        if (moneyDetails.style.display === 'none') {
            moneyDetails.style.display = 'block';
            toggleLink.textContent = 'Hide Details';
        } else {
            moneyDetails.style.display = 'none';
            toggleLink.textContent = 'Show Details';
        }
    }
    document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('.enlargeable');

        images.forEach(img => {
            img.addEventListener('click', function() {
                img.classList.toggle('enlarged');
            });
        });
    });
