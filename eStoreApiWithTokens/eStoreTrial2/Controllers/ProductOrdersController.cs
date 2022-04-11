using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using eStoreTrial2.Models;

namespace eStoreApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductOrdersController : ControllerBase
    {
        public eStoreContext _context;

        public ProductOrdersController()
        {
            _context = new eStoreContext();
        }

        //get all
        [HttpGet]
        public List<ProductOrder> GetAll()
        {
            return _context.productOrders.ToList();
        }

        //get by id
        [HttpGet("{id}")]
        public IActionResult getById(int id)
        {
            ProductOrder Pro = _context.productOrders.FirstOrDefault(Pro => Pro.id == id);
            if (Pro == null)
                return NotFound();
            else
                return Ok(Pro);
        }


        [HttpPost]
        public IActionResult Add(ProductOrder order)
        {
            if (order == null)
                return BadRequest();
            else
            {
                _context.productOrders.Add(order);
                _context.SaveChanges();
                return Created("Done", _context.productOrders.ToList());
            }
        }

        // edit 
        [HttpPut("{id}")]
        public IActionResult Edit(int id, ProductOrder order)
        {
            if (order == null)
                return BadRequest();

            ProductOrder contextorder = _context.productOrders.FirstOrDefault(p => p.id == id);
            if (contextorder == null)
                return NotFound();

            contextorder.Quantity = order.Quantity;
            contextorder.user_id = 1;
            contextorder.Product_id = order.Product_id;
            contextorder.Price = order.Price;
            contextorder.Date = DateTime.Now;
            _context.SaveChanges();
            return NoContent();
        }


        // delete
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            ProductOrder contextorder = _context.productOrders.FirstOrDefault(pro => pro.id == id);
            if (contextorder == null)
                return NotFound();
            _context.productOrders.Remove(contextorder);
            _context.SaveChanges();
            return Ok(contextorder);
        }
    }
}
