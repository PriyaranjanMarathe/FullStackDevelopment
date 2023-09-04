using FullStack.API.Data;
using FullStack.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FullStack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {


        private readonly FullStackDBContext _fullStackDBContext;
        public EmployeesController(FullStackDBContext fullStackDBContext)
        {
            _fullStackDBContext = fullStackDBContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var employees = await _fullStackDBContext.Employees.ToListAsync();

            return Ok(employees);
        }

        [HttpPost]


        public async Task<IActionResult> AddEmployee([FromBody]Employee employeeRequest)
        {
            employeeRequest.Id = Guid.NewGuid();
            await _fullStackDBContext.Employees.AddAsync(employeeRequest);
            await _fullStackDBContext.SaveChangesAsync();

            return Ok(employeeRequest);
        }
       
    }
}
