using Microsoft.AspNetCore.Mvc;
//
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
//
using eStoreTrial2.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace eStoreTrial2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        public eStoreContext Context;
        public AccountController()
        {
            Context = new eStoreContext();
        }

        //get all
        [HttpGet]
        public List<AccountUser> GetAll()
        {
            return Context.AccountUsers.ToList();
        }


        [HttpGet("{User_id}")]
        public IActionResult getById(int User_id)
        {
            AccountUser user = Context.AccountUsers.FirstOrDefault(user => user.User_id == User_id);
            if (user == null)
                return NotFound();
            else
                return Ok(user);
        }
        [HttpPost]
        public IActionResult Add(AccountUser user)
        {
            if (user == null)
                return BadRequest();
            else
            {
                Context.AccountUsers.Add(user);
                Context.SaveChanges();
                return Created("Done", Context.AccountUsers.ToList());
            }
        }


    }
}

