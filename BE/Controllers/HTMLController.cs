using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Tasker.Controllers
{
    [Route("/")]
    [ApiController]
    public class HTMLController : ControllerBase
    {
        [HttpGet]
        public ContentResult Index() {
            
            string html = @"<!DOCTYPE html>
<html>

<head>
  <meta charset='utf-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <title>API Doc</title>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
  <script src='main.js'></script>
  <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
    integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'>
</head>

<body>
  <div class='wrapper'>
    <div class='container'>
      <div class='site-index'>

        <div class='body-content'>
          <h1>TodoAPI</h1>
          <h2>This api is NOT RESTful and barely works, use on your own risk.</h2>
          the endpoint for this api is <a
            href='http://ec2-3-88-230-105.compute-1.amazonaws.com:4000/'>http://ec2-3-88-230-105.compute-1.amazonaws.com:4000/</a>
          <br>
          You can get all the current users by going to <a
            href='http://ec2-3-88-230-105.compute-1.amazonaws.com:4000/users'>http://ec2-3-88-230-105.compute-1.amazonaws.com:4000/users</a>
          <br>
          <b>The best way to use this API is simply to try, as I worked on the error messages and they should help way more than this documentation.</b>


          <br>
          <br>
          <br>
          <h2>Models</h2>
          <h3>User</h3>
          <table class='table'>
            <tbody>
              <tr>
                <td>id</td>
                <td>int</td>
              </tr>
              <tr>
                <td>Username</td>
                <td>string</td>
              </tr>
              <tr>
                <td>FirstName</td>
                <td>string</td>
              </tr>
              <tr>
                <td>LastName</td>
                <td>string</td>
              </tr>
              <tr>
                <td>access_token</td>
                <td>string (read-only) - Bearer token for authentication</td>
              </tr>
            </tbody>
          </table>
          <h3>Task</h3>
          <table class='table'>
            <tbody>
              <tr>
                <td>id</td>
                <td>int (read-only)</td>
              </tr>
              <tr>
                <td>title</td>
                <td>string (required) max 255 chars</td>
              </tr>
              <tr>
                <td>desc</td>
                <td>string (optional)</td>
              </tr>
              <tr>
                <td>marked_as_done</td>
                <td>boolean (optional)</td>
              </tr>
              <tr>
                <td>created_at</td>
                <td>date (read-only)</td>
              </tr>
            </tbody>
          </table>
          <br>
          <br>
          <br>

          <h2>List of API calls</h2>
          <p>(half of them may not work /: )</p>
          <h3>User</h3>
          <table class='table'>
            <tbody>
              <tr>
                <td>GET /users/{id}</td>
                <td>Get user</td>
              </tr>
              <tr>
                <td>PUT /users/{id}</td>
                <td>Update user profile</td>
              </tr>
              <tr>
                <td>POST /users</td>
                <td>For creating a new user, doesn't need an authentication token</td>
              </tr>
              <tr>
                <td>POST /users/get-token</td>
                <td>To get access_token again, send your username and password</td>
              </tr>
            </tbody>
          </table>
          <h3>Task</h3>
          <table class='table'>
            <tbody>
              <tr>
                <td>GET /tasks</td>
                <td>Get list of tasks</td>
              </tr>
              <tr>
                <td>GET /tasks/{id}</td>
                <td>Get details of specific task</td>
              </tr>
              <tr>
                <td>PUT /tasks/{id}</td>
                <td>Update task</td>
              </tr>
              <tr>
                <td>POST /tasks</td>
                <td>Create a new task</td>
              </tr>
              <tr>
                <td>DELETE /tasks/{id}</td>
                <td>Delete task</td>
              </tr>
            </tbody>
          </table>

          <h2>API call examples</h2>
          <h3>Create an account</h3>
          <p>Doesn't need an authentication token<br>POST /users</p>
          Body:
          <pre>
          {
            'Password': 'abasdc',
            'Username': 'aasdbc',
            'LastName': 'abasdc',
            'FirstName': 'aasdbc'
          }
        </pre>

          <h3>Authenticate</h3>
          <p>Doesn't need an authentication token<br>POST users/authenticate</p>
          Body:
          <pre>
          {
            'Password': 'abc',
            'Username': 'abc'
          }</pre>

          <h3>Create a post</h3>
          <p>Needs an authentication token<br>POST /task</p>
          Body:
          <pre>
          {
            'Title': 'asd'
          }</pre>
          <br>
          <br>
          <br>
          <br>


          <h1>The super documentation:</h1>
          <p>(The code in the controllers, this is the easiest way to understand this API)</p>
        </div>
      </div>
      <h2>Task controller</h2>
      <!-- HTML generated using hilite.me -->
      <div
        style='background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;'>
        <pre style='margin: 0; line-height: 125%'><span style='color: #888888'>// GET: /task</span>
<span style='color: #0000CC'>[HttpGet]</span>
<span style='color: #0000CC'>[AllowAnonymous]</span>
<span style='color: #008800; font-weight: bold'>public</span> IActionResult <span style='color: #0066BB; font-weight: bold'>GetAll</span>() {
    <span style='color: #008800; font-weight: bold'>return</span> <span style='color: #0066BB; font-weight: bold'>Ok</span>(_taskService.GetAll());
}


<span style='color: #888888'>// POST: /task</span>
<span style='color: #0000CC'>[HttpPost]</span>
<span style='color: #008800; font-weight: bold'>public</span> IActionResult <span style='color: #0066BB; font-weight: bold'>Post</span>([FromBody] TaskCreateModel model) {
    <span style='color: #333399; font-weight: bold'>var</span> task = _mapper.Map&lt;Data.Task&gt;(model);

    <span style='color: #008800; font-weight: bold'>try</span> {
        _taskService.Create(task);
        <span style='color: #008800; font-weight: bold'>return</span> <span style='color: #0066BB; font-weight: bold'>Ok</span>();
    }
    <span style='color: #008800; font-weight: bold'>catch</span> (AppException ex) {
        <span style='color: #008800; font-weight: bold'>return</span> <span style='color: #0066BB; font-weight: bold'>BadRequest</span>(<span style='color: #008800; font-weight: bold'>new</span> { message = ex.Message });
    }
}

<span style='color: #888888'>// DELETE: /task/5</span>
<span style='color: #0000CC'>[HttpDelete(&quot;{id}&quot;)]</span>
<span style='color: #008800; font-weight: bold'>public</span> IActionResult <span style='color: #0066BB; font-weight: bold'>Delete</span>(<span style='color: #333399; font-weight: bold'>int</span> id) {
    <span style='color: #008800; font-weight: bold'>try</span> {
        _taskService.Delete(id);
        <span style='color: #008800; font-weight: bold'>return</span> <span style='color: #0066BB; font-weight: bold'>Ok</span>();
    }
    <span style='color: #008800; font-weight: bold'>catch</span> (AppException ex) {
        <span style='color: #008800; font-weight: bold'>return</span> <span style='color: #0066BB; font-weight: bold'>BadRequest</span>(<span style='color: #008800; font-weight: bold'>new</span> { message = ex.Message });
    }
}
</pre>
      </div>
      <br>
      <h2>User controller</h2>


      <!-- HTML generated using hilite.me -->
      <div
        style='background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;'>
        <pre style='margin: 0; line-height: 125%'><span style='color: #888888'>//  POST /users/authenticate</span>
<span style='color: #0000CC'>[AllowAnonymous]</span>
<span style='color: #0000CC'>[HttpPost(&quot;authenticate&quot;)]</span>
<span style='color: #008800; font-weight: bold'>public</span> IActionResult <span style='color: #0066BB; font-weight: bold'>Authenticate</span>([FromBody]AuthenticateModel model)
{
    <span style='color: #333399; font-weight: bold'>var</span> user = _userService.Authenticate(model.Username, model.Password);

    <span style='color: #008800; font-weight: bold'>if</span> (user == <span style='color: #008800; font-weight: bold'>null</span>)
        <span style='color: #008800; font-weight: bold'>return</span> <span style='color: #0066BB; font-weight: bold'>BadRequest</span>(<span style='color: #008800; font-weight: bold'>new</span> { message = <span style='background-color: #fff0f0'>&quot;Username or password is incorrect&quot;</span> });

    <span style='color: #333399; font-weight: bold'>var</span> tokenHandler = <span style='color: #008800; font-weight: bold'>new</span> JwtSecurityTokenHandler();
    <span style='color: #333399; font-weight: bold'>var</span> key = Encoding.ASCII.GetBytes(_appSettings.Secret);
    <span style='color: #333399; font-weight: bold'>var</span> tokenDescriptor = <span style='color: #008800; font-weight: bold'>new</span> SecurityTokenDescriptor
    {
        Subject = <span style='color: #008800; font-weight: bold'>new</span> ClaimsIdentity(<span style='color: #008800; font-weight: bold'>new</span> Claim[]
        {
            <span style='color: #008800; font-weight: bold'>new</span> <span style='color: #0066BB; font-weight: bold'>Claim</span>(ClaimTypes.Name, user.Id.ToString())
        }),
        Expires = DateTime.UtcNow.AddDays(<span style='color: #6600EE; font-weight: bold'>7</span>),
        SigningCredentials = <span style='color: #008800; font-weight: bold'>new</span> SigningCredentials(<span style='color: #008800; font-weight: bold'>new</span> SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
    };
    <span style='color: #333399; font-weight: bold'>var</span> token = tokenHandler.CreateToken(tokenDescriptor);
    <span style='color: #333399; font-weight: bold'>var</span> tokenString = tokenHandler.WriteToken(token);

    <span style='color: #888888'>// return basic user info and authentication token</span>
    <span style='color: #008800; font-weight: bold'>return</span> <span style='color: #0066BB; font-weight: bold'>Ok</span>(<span style='color: #008800; font-weight: bold'>new</span>
    {
        Id = user.Id,
        Username = user.Username,
        FirstName = user.FirstName,
        LastName = user.LastName,
        Token = tokenString
    });
}

<span style='color: #888888'>//  POST /users/register</span>
<span style='color: #0000CC'>[AllowAnonymous]</span>
<span style='color: #0000CC'>[HttpPost(&quot;register&quot;)]</span>
<span style='color: #008800; font-weight: bold'>public</span> IActionResult <span style='color: #0066BB; font-weight: bold'>Register</span>([FromBody]RegisterModel model)
{
    <span style='color: #888888'>// map model to entity</span>
    <span style='color: #333399; font-weight: bold'>var</span> user = _mapper.Map&lt;User&gt;(model);

    <span style='color: #008800; font-weight: bold'>try</span>
    {
        <span style='color: #888888'>// create user</span>
        _userService.Create(user, model.Password);
        <span style='color: #008800; font-weight: bold'>return</span> <span style='color: #0066BB; font-weight: bold'>Ok</span>();
    }
    <span style='color: #008800; font-weight: bold'>catch</span> (AppException ex)
    {
        <span style='color: #888888'>// return error message if there was an exception</span>
        <span style='color: #008800; font-weight: bold'>return</span> <span style='color: #0066BB; font-weight: bold'>BadRequest</span>(<span style='color: #008800; font-weight: bold'>new</span> { message = ex.Message });
    }
}


<span style='color: #888888'>//  GET /users</span>
<span style='color: #0000CC'>[AllowAnonymous]</span>
<span style='color: #0000CC'>[HttpGet]</span>
<span style='color: #008800; font-weight: bold'>public</span> IActionResult <span style='color: #0066BB; font-weight: bold'>GetAll</span>()
{
    <span style='color: #333399; font-weight: bold'>var</span> users = _userService.GetAll();
    <span style='color: #333399; font-weight: bold'>var</span> model = _mapper.Map&lt;IList&lt;UserModel&gt;&gt;(users);
    <span style='color: #008800; font-weight: bold'>return</span> <span style='color: #0066BB; font-weight: bold'>Ok</span>(model);
}

<span style='color: #888888'>// GET /users/1</span>
<span style='color: #0000CC'>[HttpGet(&quot;{id}&quot;)]</span>
<span style='color: #008800; font-weight: bold'>public</span> IActionResult <span style='color: #0066BB; font-weight: bold'>GetById</span>(<span style='color: #333399; font-weight: bold'>int</span> id)
{
    <span style='color: #333399; font-weight: bold'>var</span> user = _userService.GetById(id);
    <span style='color: #333399; font-weight: bold'>var</span> model = _mapper.Map&lt;UserModel&gt;(user);
    <span style='color: #008800; font-weight: bold'>return</span> <span style='color: #0066BB; font-weight: bold'>Ok</span>(model);
}

<span style='color: #888888'>// PUT /users/1 (God only knows if this works)</span>
<span style='color: #0000CC'>[HttpPut(&quot;{id}&quot;)]</span>
<span style='color: #008800; font-weight: bold'>public</span> IActionResult <span style='color: #0066BB; font-weight: bold'>Update</span>(<span style='color: #333399; font-weight: bold'>int</span> id, [FromBody]UpdateModel model)
{
    <span style='color: #888888'>// map model to entity and set id</span>
    <span style='color: #333399; font-weight: bold'>var</span> user = _mapper.Map&lt;User&gt;(model);
    user.Id = id;

    <span style='color: #008800; font-weight: bold'>try</span>
    {
        <span style='color: #888888'>// update user </span>
        _userService.Update(user, model.Password);
        <span style='color: #008800; font-weight: bold'>return</span> <span style='color: #0066BB; font-weight: bold'>Ok</span>();
    }
    <span style='color: #008800; font-weight: bold'>catch</span> (AppException ex)
    {
        <span style='color: #888888'>// return error message if there was an exception</span>
        <span style='color: #008800; font-weight: bold'>return</span> <span style='color: #0066BB; font-weight: bold'>BadRequest</span>(<span style='color: #008800; font-weight: bold'>new</span> { message = ex.Message });
    }
}

<span style='color: #888888'>// DELETE /users/1</span>
<span style='color: #0000CC'>[HttpDelete(&quot;{id}&quot;)]</span>
<span style='color: #008800; font-weight: bold'>public</span> IActionResult <span style='color: #0066BB; font-weight: bold'>Delete</span>(<span style='color: #333399; font-weight: bold'>int</span> id)
{
    _userService.Delete(id);
    <span style='color: #008800; font-weight: bold'>return</span> <span style='color: #0066BB; font-weight: bold'>Ok</span>();
}
</pre>
      </div>

    </div>
  </div>

</body>

</html>";
            return base.Content(html, "text/html");

        }
    }
}