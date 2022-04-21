import './Dashboard.css';
import Chart from "react-apexcharts";

function Dashboard(){
    const chartDonut = {
          
        series: [55, 44, 41, 17, 15],
        options: {
          labels: ['Tlemcen', 'Oran', 'Annaba', 'Constantine' , 'Adrar'],
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      }

      const chartColumn = {
        chart: {
          type: 'bar'
        },
        series: [{
          data: [{
            x: 'category A',
            y: 10
          }, {
            x: 'category B',
            y: 18
          }, {
            x: 'category C',
            y: 13
          }]
        }]
      }
    return(
        <div class="dashboard-main">
            <h1>Hello Nadir!</h1>
            <div className="col-md-10">
                <div className='row'>
                   {/* Card Statistics 1 */ }
                    <div class="col-xl-3 col-lg-6">
                        <div class="card l-bg-cherry">
                            <div class="card-statistic-3 p-4">
                            <div class="card-icon card-icon-large"><i class="bi bi-cart"></i></div>
                            <div class="mb-4">
                                <h5 class="card-title mb-0">New Orders</h5>
                            </div>
                            <div class="row align-items-center mb-2 d-flex">
                                <div class="col-8">
                                    <h2 class="d-flex align-items-center mb-0">
                                        3,243
                                    </h2>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* Card Statistics 2  */}
                    <div class="col-xl-3 col-lg-6">
                        <div class="card l-bg-blue-dark">
                            <div class="card-statistic-3 p-4">

                            <div class="card-icon card-icon-large"><i class="bi bi-people"></i></div>
                            <div class="mb-4">
                                <h5 class="card-title mb-0">Clients</h5>
                            </div>
                            <div class="row align-items-center mb-2 d-flex">
                            <div class="col-8">
                                <h2 class="d-flex align-items-center mb-0">
                                    578
                                </h2>
                            </div>
                    </div>
                        </div>
                    </div>
                    </div>
                    {/* Card Statistics 3  */}
                    <div class="col-xl-3 col-lg-6">
                        <div class="card l-bg-orange-dark">
                            <div class="card-statistic-3 p-4">

                            <div class="card-icon card-icon-large"><i class="bi bi-bag"></i></div>
                            <div class="mb-4">
                                <h5 class="card-title mb-0">Produits</h5>
                            </div>
                            <div class="row align-items-center mb-2 d-flex">
                            <div class="col-8">
                                <h2 class="d-flex align-items-center mb-0">
                                    578
                                </h2>
                            </div>
                    </div>
                        </div>
                    </div>
                    </div>
                    {/* Card Statistics 4  */}
                    <div class="col-xl-3 col-lg-6">
                        <div class="card l-bg-green-dark">
                            <div class="card-statistic-3 p-4">

                            <div class="card-icon card-icon-large"><i class="bi bi-bag"></i></div>
                            <div class="mb-4">
                                <h5 class="card-title mb-0">Revenue Today</h5>
                            </div>
                            <div class="row align-items-center mb-2 d-flex">
                            <div class="col-8">
                                <h2 class="d-flex align-items-center mb-0">
                                    11.536k 
                                </h2>
                            </div>
                    </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='float-end'>
               <Chart 
               options={chartDonut.options}
               series={chartDonut.series}
               type="donut" 
               width="500"
               />
               </div>
            </div>
        </div>
    );
}

export default Dashboard;