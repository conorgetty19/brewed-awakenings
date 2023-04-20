import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const orders = getOrders()

document.addEventListener("click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("employee")) {

            const [, employeeId] = itemClicked.id.split("--")

            let matchingEmployee = null
            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    matchingEmployee = employee
                }
            }

            let numberOfSales = 0
            for (const order of orders){
                if (order.employeeId === parseInt(matchingEmployee.id)){
                    numberOfSales +=1
                }
            }
            window.alert(`${matchingEmployee.name} sold ${numberOfSales} products.`)
        }
    }
)

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

