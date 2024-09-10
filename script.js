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
            { amount: 1000, reason: "Poor Management", date: "04-09-2024" },
        ]
    },
    {
        name: "Andrew Kgwadi",
        fines: [
            { amount: 1000, reason: "Poor Management", date: "04-09-2024" },

        ]
    },
    {
        name: "Leon Coetzee",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "William Moshupye",
        fines: [
            { amount: 1000, reason: "Gross Misconduct", date: "04-09-2024" },
            { amount: 1000, reason: "Not removing Mahlangu's personal items out of his vehicle", date: "08-09-2024" },

        ]
    },
    {
        name: "Precious Skosana",
        fines: [
            { amount: 1000, reason: "Poor Management", date: "04-09-2024" },
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
            { amount: 1000, reason: "Gross Misconduct", date: "04-09-2024" },
        ]
    },
    {
        name: "Katlego Moagi",
        fines: [
            { amount: 500, reason: "Exchaning company vehicle without consent from Ops Manager.", date: "05-09-2024" },
            { amount: 500, reason: "Distortion", date: "09-09-2024" },

        ]
    },
    {
        name: "Hope Monakwe",
        fines: [
            { amount: 250, reason: "Not concentrating", date: "07-09-2024" },   
            { amount: 2000, reason: "Distortion", date: "09-09-2024" },
   
        ]
    },
    {
        name: "Kamogelo Methlape",
        fines: [
            { amount: 2000, reason: "Gross Misconduct", date: "04-09-2024" },    
            { amount: 250, reason: "Not concentrating", date: "07-09-2024" },      
            { amount: 1500, reason: "Distortion", date: "09-09-2024" },


        ]
    },
    {
        name: "Brice Meissner",
        fines: [
            { amount: 500, reason: "Late coming" },            
            { amount: 250, reason: "Not following intructions" },               
        ]
    },
    {
        name: "Luzuko Komani",
        fines: [
            { amount: 1000, reason: "Late coming" },            
            { amount: 250, reason: "Late coming" },   
            { amount: 500, reason: "Late coming" },   
            { amount: 500, reason: "Late coming", date: "02-09-2024" },   
        
        ]
    },
    {
        name: "Mzwandile Mabiletsa",
        fines: [
            { amount: 1000, reason: "Late coming" },            
            { amount: 250, reason: "Poor work performance" },          
            { amount: 250, reason: "Not requesting fuel" },     
            { amount: 500, reason: "Late coming", date: "05-09-2024" },      
            { amount: 500, reason: "Not removing Mahlangu's personal items out of his vehicle", date: "08-09-2024" },
        ]
    },
    {
        name: "Fhedzani Malivha",
        fines: [
            { amount: 250, reason: "Issuing all equipments to CPOs" },     
            { amount: 250, reason: "Failure to take instructions", date: "2024-08-27" },            
            { amount: 250, reason: "Not requesting fuel" },                  
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
            { amount: 500, reason: "Exchaning company vehicle without consent from Ops Manager.", date: "05-09-2024" },
        ]
    },
    {
        name: "Lindokuhle Masanabo",
        fines: [
            { amount: 2000, reason: "Gross Misconduct", date: "04-09-2024" },
        ]
    },
    {
        name: "Ernest Maja",
        fines: [
            { amount: 2000, reason: "Gross Misconduct", date: "04-09-2024" },
        ]
    },
    {
        name: "Thokozani Mahlangu",
        fines: [
            { amount: 500, reason: "Exchaning company vehicle without consent from Ops Manager.", date: "05-09-2024" },
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
            { amount: 250, reason: "For Leaving with the Mahindra key" },
            { amount: 500, reason: "Failure to follow instructions" },
            { amount: 500, reason: "Late coming" },
            { amount: 250, reason: "Inconveniecing the boss" },

        ]
    },
    {
        name: "Malebogo Sere",
        fines: [
            { amount: 250, reason: "For recognising Mr Khumalo" },
        ]
    },
    {
        name: "Tshegofatso Tau",
        fines: [
            { amount: 500, reason: "Failing Client's Request", date: "05-09-2024" },            
        ]
    },
    {
        name: "Mathews Gaubose",
        fines: [
            { amount: 250, reason: "Lack of Concentration", date: "30-08-2024" },          
            { amount: 250, reason: "Leaving lights on", date: "10-09-2024" },              
        ]
    },
    {
        name: "Kate Lebese",
        fines: [
            { amount: 500, reason: "Leaving fleet control unattended", date: "10-09-2024" },              
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

