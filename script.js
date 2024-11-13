function addTask() {
    const container = document.querySelector(".main-container");
    const taskInput = document.getElementById("taskInput");
    const prioritySelect = document.getElementById("prioritySelect");

    if (taskInput.value.trim()) {
        const card = document.createElement("div");
        card.classList.add("card");

        const priority = prioritySelect.value;
        if (priority === "alta") {
            card.style.backgroundColor = "red";
            card.style.color = "white";
        } else if (priority === "media") {
            card.style.backgroundColor = "yellow";
        } else if (priority === "baja") {
            card.style.backgroundColor = "green";
            card.style.color = "white";
        }

        const text = document.createElement("p");
        text.textContent = taskInput.value;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";

        deleteBtn.onclick = function () {
            if (priority === "alta") {
                showConfirmModal(() => {
                    container.removeChild(card);
                });
            } else {
                container.removeChild(card);
            }
        };

        card.appendChild(text);
        card.appendChild(deleteBtn);
        container.appendChild(card);

        taskInput.value = "";
    }
}

// Función para mostrar el modal de confirmación
function showConfirmModal(onConfirm) {
    const ventana = document.getElementById("confirmarVentana");
    const confirmar = document.getElementById("confirmar");
    const cancelar = document.getElementById("cancelar");

    ventana.style.display = "flex";

    confirmar.onclick = function () {
        ventana.style.display = "none";
        onConfirm();
    };

    cancelar.onclick = function () {
        ventana.style.display = "none";
    };
}

window.onclick = function (event) {
    const ventana = document.getElementById("confirmModal");
    if (event.target === ventana) {
        ventana.style.display = "none";
    }
};