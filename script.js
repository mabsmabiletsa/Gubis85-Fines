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
            { amount: 500, reason: "DISCOUNT", date: "10-10-2024" },    

 
       
        ]
    },
    {
        name: "Priscilla Masanabo",
        fines: [
            { amount: 500, reason: "DISCOUNT", date: "10-10-2024" },    
        ]
    },
    {
        name: "Precious Skosana",
        fines: [
            { amount: 500, reason: "DISCOUNT", date: "10-10-2024" },    



        ]
    },
    {
        name: "Maud Weideman",
        fines: [
            { amount: 500, reason: "DISCOUNT", date: "10-10-2024" },    
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
            { amount: 500, reason: "DISCOUNT", date: "10-10-2024" },    
        ]
    },
    {
        name: "Ishmael Ngcobo",
        fines: [
            { amount: 0, reason: "NO FINES" },        
        ]
    },
    {
        name: "Katlego Moagi",
        fines: [
            { amount: 500, reason: "DISCOUNT", date: "10-10-2024" },    
          
        ]
    },
    {
        name: "Hope Monakwe",
        fines: [ 
            { amount: 500, reason: "DISCOUNT", date: "10-10-2024" },    
   
        ]
    },
    {
        name: "Kamogelo Methlape",
        fines: [
            { amount: 500, reason: "DISCOUNT", date: "10-10-2024" },    
 
            
        
        ]
    },
    {  
        name: "Brice Meissner",
        fines: [
            { amount: 500, reason: "DISCOUNT", date: "10-10-2024" },    

        ]
    },
    {
        name: "Luzuko Komani",
        fines: [
            { amount: 500, reason: "DISCOUNT", date: "10-10-2024" },    
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
            { amount: 500, reason: "DISCOUNT", date: "10-10-2024" },    
            
         

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
            { amount: 250, reason: "DISCOUNT", date: "10-10-2024" },    
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
            { amount: 500, reason: "DISCOUNT", date: "10-10-2024" },    
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
            { amount: 500, reason: "DISCOUNT", date: "10-10-2024" },    
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
            { amount: 500, reason: "DISCOUNT", date: "10-10-2024" },    
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
            { amount: 500, reason: "DISCOUNT", date: "10-10-2024" },    
          
        ]
    },
    {
        name: "Azaria Khambani",
        fines: [
            { amount: 500, reason: "DISCOUNT", date: "10-10-2024" },    
         
        ]
    },
    {
        name: "Nepthalie Antaya",
        fines: [
            { amount: 250, reason: "Not leaving out register out earlier", date: "01-10-2024" },             
        ]
    },
    {
        name: "Raymond Mnisi",
        fines: [
            { amount: 500, reason: "DISCOUNT", date: "10-10-2024" },    
            
  
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

