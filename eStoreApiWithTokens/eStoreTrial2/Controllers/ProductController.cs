using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using eStoreTrial2.Models;
using System.Collections.Generic;
using System.Linq;

namespace eStoreTrial2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        public eStoreContext Context;
    public ProductController()
    {
        Context = new eStoreContext();
    }

    //get all
    [HttpGet]
    public List<Product> GetAll()
    {
        return Context.Products.ToList();
    }

        //get by id
        [HttpGet("{id}")]
        public IActionResult getById(int id)
    {
            Product Pro = Context.Products.FirstOrDefault(Pro => Pro.id == id);
            if (Pro == null)
                return NotFound();
            else
                return Ok(Pro);
    }


    [HttpPost]
    public IActionResult Add(Product emp)
    {
        if (emp == null)
            return BadRequest();
        else
        {
            Context.Products.Add(emp);
            Context.SaveChanges();
            return Created("Done", Context.Products.ToList());
        }
    }

        // edit 
        [HttpPut("{id}")]
        public IActionResult Edit(int id, Product prod)
        {
            if (prod == null)
                return BadRequest();

            Product contextpro = Context.Products.FirstOrDefault(p => p.id == id);
            if (contextpro == null)
                return NotFound();

            contextpro.Name = prod.Name;
            contextpro.Price = prod.Price;
            contextpro.Image = prod.Image;
            Context.SaveChanges();
            return NoContent();
        }


        // delete
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Product contextprod = Context.Products.FirstOrDefault(pro => pro.id == id);
            if (contextprod == null)
                return NotFound();
            Context.Products.Remove(contextprod);
            Context.SaveChanges();
            return Ok(contextprod);
        }
}
}
