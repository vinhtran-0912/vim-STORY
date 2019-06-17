// @flow
import React from 'react';
import '../../styles/signup-login.css';

const SignupForm = () => (
  <div className="main">
		<section className="signup">
				<div className="container">
					<div className="signup-content">
						<form id="signup-form" className="signup-form">
							<h2 className="form-title">Create account</h2>
							<div className="form-group">
									<input type="text" className="form-input" name="name" id="name" placeholder="Your Name"/>
							</div>
							<div className="form-group">
									<input type="email" className="form-input" name="email" id="email" placeholder="Your Email"/>
							</div>

							<div class="row row-space">
								<div class="col-2">
										<div className="form-group">
											<input className="form-input" type="date" name="dateofbirth" id="dateofbirth"/>
										</div>
								</div>
								<div className="col-4 row-space">
									<div class="select">
										<select name="slct" id="slct">
											<option value="0">MALE</option>
											<option value="1">FEMALE</option>
											<option value="2">ANOTHER</option>
										</select>
									</div>
								</div>
						</div>

							<div className="form-group">
									<input type="password" className="form-input" name="password" id="password" placeholder="Password"/>
									<span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password"></span>
							</div>
							<div className="form-group">
									<input type="password" className="form-input" name="re_password" id="re_password" placeholder="Repeat your password"/>
							</div>
							<div className="form-group">
									<input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
									<label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#0" className="term-service">Terms of service</a></label>
							</div>
							<div className="form-group">
									<input type="submit" name="submit" id="submit" className="form-submit" value="Sign up"/>
							</div>
						</form>
						<p className="loginhere">
							Have already an account ? <a href="#0" className="loginhere-link">Login here</a>
						</p>
					</div>
				</div>
		</section>
  </div>
);

export default SignupForm;

