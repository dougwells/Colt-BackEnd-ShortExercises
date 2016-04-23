<% include partials/header %>
   <div class="ui main text container">
   	<div class="ui huge header">Surfing Sites</div>
    <div class="ui top attached segment">
<div class="ui divided items">
	<% blogs.forEach(function(blog){ %>
	 <div class="item">
	    <div class="image">
	      <img src="<%= blog.image %>">
	    </div>
	    <div class="content">
	      <a class="header"><%= blog.title %></a>
	      <div class="meta">
	        <span class="cinema"><%= blog.created.toDateString() %></span>
	      </div>
	      <div class="description">
	        <p><%= blog.body.substring(0,100); %></p>
	      </div>
	      <div class="extra">
	        <a href="/blogs/<%=blog._id %>" class="ui floated basic violet button">
	          Read More
	          <i class="right chevron icon"></i>
	        </a>
	      </div>
	    </div>
	  </div>
	<% }); %>
</div>
</div>
    
  </div>
<% include partials/footer %>

 