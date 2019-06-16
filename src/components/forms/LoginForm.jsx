import React from 'react';

import '../../styles/signup-login.css';

const LoginForm = () => (
  <div className="main">
		<section className="signup">
			<div className="container">
				<div className="signup-content">
					<form id="signup-form" className="signup-form">
						<h2 className="form-title">Login</h2>
						<div className="form-group">
							<input type="email" className="form-input" name="email" id="email" placeholder="Your Email"/>
						</div>
						<div className="form-group">
							<input type="password" className="form-input" name="password" id="password" placeholder="Your password"/>
						</div>
						<div className="form-group">
							<input type="submit" name="submit" id="submit" className="form-submit" value="Login"/>
						</div>
					</form>
					<p className="loginhere">
						Not registered ? <a href="#0" className="loginhere-link">Create an account</a>
					</p>
				</div>
			</div>
		</section>
  </div>
);

export default LoginForm;
