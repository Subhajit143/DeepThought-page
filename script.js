const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
  sidebar.classList.toggle('close')
  toggleButton.classList.toggle('rotate')

  closeAllSubMenus()
}


function toggleSubMenu(button){

    if(!button.nextElementSibling.classList.contains('show')){
      closeAllSubMenus()
    }
  
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')
  
    if(sidebar.classList.contains('close')){
      sidebar.classList.toggle('close')
      toggleButton.classList.toggle('rotate')
    }
  }
  
  function closeAllSubMenus(){
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
      ul.classList.remove('show')
      ul.previousElementSibling.classList.remove('rotate')
    })
  }



document.addEventListener("DOMContentLoaded", function () {

 

  // JSON Data
  const jsonData = {
    _id: { $oid: "63b64dc9e3b230ebb60a495d" },
    title: "Technical Project Management",
    description:
      "Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking...",
    project_image:
      "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
    learning_outcomes: [
      "Bare minimum knowledge of project management",
      "4SA Concept",
      "Would be able to handle any project efficiently",
    ],
    pre_requisites: [
      "An open mind to learn any concept",
      "Thought of Unlearning and Relearning",
    ],
    tasks: [
      {
        task_id: 18882,
        task_title: "Explore the world of management",
        task_description:
          "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion.",
        assets: [
          {
            asset_id: 18883,
            asset_title: "Technical Project Management",
            asset_description:
              "Story of Alignment, Scope of Agility, Specific Accountable, Staggering Approach",
            asset_content: "https://www.youtube.com/embed/TiMRwri1xJ8",
            asset_type: "display_asset",
            asset_content_type: "video",
          },
          {
            asset_id: 18884,
            asset_title: "Threadbuild",
            asset_description:
              "Watch the video and thread build, and jot out key threads while watching that video.",
            asset_content: "",
            asset_type: "input_asset",
            asset_content_type: "threadbuilder",
          },
          {
            asset_id: 18885,
            asset_title: "Structure your pointers",
            asset_description:
              "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
            asset_content: "",
            asset_type: "input_asset",
            asset_content_type: "article",
          },
          {
            asset_id: 18886,
            asset_title: "4SA Method",
            asset_description: "To explore more read more",
            asset_content:
              "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
            asset_type: "display_asset",
            asset_content_type: "article",
          },
        ],
      },
    ],
  };

  // Function to render the course details
  function renderCourse() {
    const taskContainer = document.getElementById("task-container");
    if (!taskContainer) return; // Check if element exists

    // Render Course Title
    const mainHead = document.querySelector(".main-head h3");
    if (mainHead) {
      mainHead.textContent = jsonData.title;
    }

    // Render Tasks
    renderTasks();
  }

  // Function to render the tasks
  function renderTasks() {
    const taskContainer = document.getElementById("task-container");
    taskContainer.innerHTML = ""; // Clear previous tasks

    jsonData.tasks.forEach((task) => {
      const taskElement = document.createElement("div");
      taskElement.classList.add("task");

      taskElement.innerHTML = `
        <h4>${task.task_title}</h4>
        <p>${task.task_description}</p>
        <div class="assets"></div>
      `;

      const assetsContainer = taskElement.querySelector(".assets");

      task.assets.forEach((asset) => {
        const assetElement = document.createElement("div");
        assetElement.classList.add("asset");

        let contentHTML = "";

        if (asset.asset_content_type === "video") {
          contentHTML = `<iframe style="align-item:center;" src="${asset.asset_content}" frameborder="0" allowfullscreen></iframe>`;
        } else if (asset.asset_content_type === "threadbuilder") {
          contentHTML = `<textarea placeholder="Enter key threads here"></textarea><button>Add Thread</button>`;
        } else if (asset.asset_content_type === "article") {
          if (asset.asset_type === "input_asset") {
            contentHTML = `<input type="text" placeholder="Title"><textarea placeholder="Write your article here"></textarea><button>Submit</button>`;
          } else {
            contentHTML = `<a href="${asset.asset_content}" target="_blank">Read More</a>`;
          }
        }

        assetElement.innerHTML = `
          <h3>${asset.asset_title}
          <i class="fa-solid fa-circle-info"></i> 
          </h3>
          <p>${asset.asset_description}</p> 
           <hr style="border: 0;
              height: 1px;
              background: #CFCFCD; 
              margin: 20px 0; ">
          ${contentHTML}
        `;
        assetsContainer.appendChild(assetElement);
      });

      taskContainer.appendChild(taskElement);
    });
  }

  renderCourse();
});