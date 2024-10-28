const employees = [
    {
        name: "Zakhele Khumalo",
        fines: [
            { amount: 500, reason: "DISCOUNT", date: "10-10-2024" },    

        ]
    },
    {
        name: "Andrew Kgwadi",
        fines: [
            { amount: 0, reason: "NO FINES" },
        ]
    },
    {
        name: "William Moshupye",
        fines: [
            { amount: 1000, reason: "For not fining Mzwandile", date: "21-10-2024" },      
            { amount: 1000, reason: "Poor work performance", date: "21-10-2024" },                    
              
        ]
    },
    {
        name: "Priscilla Masanabo",
        fines: [
            { amount: 0, reason: "NO FINES" },             
        ]
    },
    {
        name: "Precious Skosana",
        fines: [
            { amount: 2000, reason: "Failure to procedurely communicate tasks", date:"21-10-2024" },             

        ]
    },
    {
        name: "Maud Weideman",
        fines: [
            { amount: 0, reason: "NO FINES" },             
        ]
    },
    {
        name: "Lesego Moatshe",
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
            { amount: 500, reason: "Late coming", date: "22-10-2024" },   
            { amount: 1000, reason: "For late coming", date: "25-10-2024" },             
            { amount: 500, reason: "For late coming", date: "25-10-2024" },             

        ]
    },
    {
        name: "Katlego Moagi",
        fines: [
            { amount: 4500, reason: "For reporting late in behalf of other employees", date: "22-10-2024" },          
            { amount: 1000, reason: "For late coming", date: "25-10-2024" },             
            { amount: 2000, reason: "For late coming", date: "26-10-2024" },             

          
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
            { amount: 1000, reason: "For late coming", date: "25-10-2024" },             
        ]
    },
    {
        name: "Kamogelo Monakwe",
        fines: [
            { amount: 1000, reason: "For late coming", date: "25-10-2024" },             
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
            { amount: 1000, reason: "For not reporting in time", date: "21-10-2024" },
            { amount: 1000, reason: "For not renewing license disc", date: "28-10-2024" },

        ]
    },
    {
        name: "Fhedzani Malivha",
        fines: [
            { amount: 1000, reason: "For late coming", date: "25-10-2024" },             
            { amount: 1000, reason: "For not renewing license disc", date: "28-10-2024" },
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
            { amount: 500, reason: "For not wearing appropriate uniform", date: "21-10-2024" },
            { amount: 1000, reason: "For late coming", date: "25-10-2024" },             

         ]
    },
    {
        name: "Lindokuhle Masanabo",
        fines: [
            { amount: 0, reason: "NO FINES" },        ]
    },
    {
        name: "Thokozani Mahlangu",
        fines: [
            { amount: 1000, reason: "For late coming", date: "25-10-2024" },             
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
    {
        name: "Christopher Gumbi",
        fines: [
            { amount: 0, reason: "NO FINES" },             
          
        ]
    },
    {
        name: "Azaria Khambani",
        fines: [
            { amount: 0, reason: "NO FINES" },             
         
        ]
    },
    {
        name: "Nepthalie Antaya",
        fines: [
            { amount: 0, reason: "NO FINES" },             
        ]
    },
    {
        name: "Raymond Mnisi",
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

