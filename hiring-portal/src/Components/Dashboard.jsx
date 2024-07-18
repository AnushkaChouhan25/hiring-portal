import React from 'react';
import "../CSS/dashboard.css";
const Dashboard = () => {
    return (
        <div className="employer-dashboard">
            <h1>Employer Dashboard</h1>

            <div className="card-section">
                <div className="card">
                    <h2>Create New Job</h2>
                    <button>Create Job</button>
                </div>

                <div className="card">
                    <h2>Edit Previous Jobs</h2>
                    <button>Edit Jobs</button>
                </div>

                <div className="card">
                    <h2>Uploaded Jobs</h2>
                    <button>View Jobs</button>
                </div>
            </div>

            <div className="card-section">
                <div className="card">
                    <h2>Shortlist Candidates</h2>
                    <button>Shortlist</button>
                </div>

                <div className="card">
                    <h2>Schedule Interview</h2>
                    <button>Schedule</button>
                </div>

                <div className="card">
                    <h2>Create Assessment Test</h2>
                    <button>Create Test</button>
                </div>
            </div>

            <div className="filter-section">
                <h2>Filter Jobs</h2>
                <form>
                    <div className="form-group">
                        <label>Role</label>
                        <input type="text" placeholder="Enter role" />
                    </div>
                    <div className="form-group">
                        <label>Salary</label>
                        <input type="text" placeholder="Enter salary range" />
                    </div>
                    <button type="submit">Apply Filters</button>
                </form>
            </div>

            <div className="statistics-section">
                <h2>Platform Statistics</h2>
                <button>View Statistics</button>
            </div>
        </div>
    );
};

export default Dashboard;