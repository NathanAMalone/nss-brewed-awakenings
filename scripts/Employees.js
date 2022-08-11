import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

const totalOrders = (employee) => {
    let count = 0

    for (const order of orders) {
        if (order.employeeId === employee.id) {
            count++
        }

    }

    return count
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeeID] = itemClicked.id.split("--")

            for (const employee of employees) {
                    if (employee.id === parseInt(employeeID)) {

                        window.alert(`${employee.name} sold ${totalOrders(employee)}.`)

                    }   
                }            
            }
        }
)




export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

                