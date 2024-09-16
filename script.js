const employees = [
    {
        name: "Calvin Mahlangu",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "Boitumelo Mahlangu",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "Zakhele Khumalo",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "Andrew Kgwadi",
        fines: [
            { amount: 1000, reason: "Poor Management", date: "04-09-2024" },

        ]
    },
    {
        name: "William Moshupye",
        fines: [
            { amount: 1000, reason: "Not removing Mahlangu's personal items out of his vehicle", date: "08-09-2024" },
            { amount: 2000, reason: "Leaving key to the safe", date: "10-09-2024" },
        ]
    },
    {
        name: "Precious Skosana",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "Maud Weideman",
        fines: [
            { amount: 250, reason: "Late coming" },
            { amount: 1000, reason: "Poor Management", date: "04-09-2024" },
        ]
    },
    {
        name: "Lesego Moatshe",
        fines: [
            { amount: 250, reason: "Late coming" },
            { amount: 1500, reason: "For not following the instructions from the leader" },
            { amount: 150, reason: "Not telling Oscar ti wear uniform", date: "11-09-2024" },
        ]
    },
    {
        name: "Naledi Bhuda",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "Lesego Matea",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "Ishmael Ngcobo",
        fines: [
            { amount: 0, reason: "NO FINES" },        ]
    },
    {
        name: "Katlego Moagi",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "Hope Monakwe",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "Kamogelo Methlape",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "Brice Meissner",
        fines: [
            { amount: 0, reason: "NO FINES" },             
        ]
    },
    {
        name: "Luzuko Komani",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "Mzwandile Mabiletsa",
        fines: [
            { amount: 0, reason: "NO FINES" },

        ]
    },
    {
        name: "Fhedzani Malivha",
        fines: [
            { amount: 0, reason: "NO FINES" },                 
        ]
    },
    {
        name: "Oscar Mgiba",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "Matimba Chauke",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "Beauty Simelane",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "Mpho Maluleka",
        fines: [
            { amount: 0, reason: "NO FINES" },        ]
    },
    {
        name: "Lindokuhle Masanabo",
        fines: [
            { amount: 0, reason: "NO FINES" },        ]
    },
    {
        name: "Ernest Maja",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "Thokozani Mahlangu",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "Tshwarelo Ndala",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "Oriel Sefoloko",
        fines: [
            { amount: 0, reason: "NO FINES" },

        ]
    },
    {
        name: "Malebogo Sere",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "Tshegofatso Tau",
        fines: [
            { amount: 0, reason: "NO FINES" },           
        ]
    },
    {
        name: "Mathews Gaubose",
        fines: [
            { amount: 0, reason: "NO FINES" },             
        ]
    },
    {
        name: "Kate Lebese",
        fines: [
            { amount: 0, reason: "NO FINES" },             
        ]
    },
    {
        name: "Busi Mahlangu",
        fines: [
            { amount: 0, reason: "NO FINES" },             
        ]
    },
    
    // Add more employees and fines here
];

let currentEmployee = '';

function displayEmployees() {
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = '';

    employees.forEach((employee, index) => {
        const total = employee.fines.reduce((sum, fine) => sum + fine.amount, 0);
        const li = document.createElement('li');
        li.textContent = `${employee.name} - R${total}`;
        li.addEventListener('click', () => showDetails(index));
        employeeList.appendChild(li);
    });
}


function showDetails(index) {
    const employee = employees[index];
    document.getElementById('employee-name').textContent = employee.name;
    
    const finesList = document.getElementById('fines-list');
    finesList.innerHTML = '';

    employee.fines.forEach(fine => {
        const li = document.createElement('li');
        li.textContent = `R${fine.amount} - ${fine.reason} (Date: ${fine.date})`;
        finesList.appendChild(li);
    });

    document.getElementById('employee-list').classList.add('hidden');
    document.getElementById('fine-details').classList.remove('hidden');
}

function goBack() {
    document.getElementById('employee-list').classList.remove('hidden');
    document.getElementById('fine-details').classList.add('hidden');
}

function showDisputeForm() {
    document.getElementById('fine-details').classList.add('hidden');
    document.getElementById('dispute-form').classList.remove('hidden');
}
function cancelDispute() {
    document.getElementById('dispute-form').classList.add('hidden');
    document.getElementById('fine-details').classList.remove('hidden');
}

function submitDispute(event) {
    event.preventDefault();
    
    const email = document.getElementById('employee-email').value;
    const reason = document.getElementById('fine-reason').value;

    const mailtoLink = `mailto:logistics@gubis85.co.za?subject=Fine Dispute by ${currentEmployee}&body=Employee Email: ${email}%0D%0AReason for Dispute: ${reason}`;
    window.location.href = mailtoLink;

    cancelDispute();
}

displayEmployees();

