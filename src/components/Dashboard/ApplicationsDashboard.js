import React, { useState, useEffect } from 'react';
import { useData } from '../../providers/DataProvider';
import { Container, Row, Col } from 'react-bootstrap';

const ApplicationsDashboard = () => {
    const { 
        applications, 
        calculateTIMEMetric,
        calculateFunctionalFitMetric,
        calculateTechnicalFitMetric,
        calculateBusinessCriticalityMetric,
        calculateHostingTypeMetric 
    } = useData();

    const colors = {
        powderblue: {backgroundColor:'powderblue'},
        skyblue: {backgroundColor: 'skyblue'},
        steelblue: {backgroundColor: 'steelblue'}
    };

    const centerInBox = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const [applicationMetrics, setApplicationsMetrics] = useState({
        TIMEMetric: calculateTIMEMetric(applications),
        functionalFitMetric: calculateFunctionalFitMetric(applications),
        technicalFitMetric: calculateTechnicalFitMetric(applications),
        businessCriticalityMetric: calculateBusinessCriticalityMetric(applications),
        hostingTypeMetric: calculateHostingTypeMetric(applications)
    })

    useEffect(() => {
        setApplicationsMetrics({
            TIMEMetric: calculateTIMEMetric(applications),
            functionalFitMetric: calculateFunctionalFitMetric(applications),
            technicalFitMetric: calculateTechnicalFitMetric(applications),
            businessCriticalityMetric: calculateBusinessCriticalityMetric(applications),
            hostingTypeMetric: calculateHostingTypeMetric(applications)
        })
    }, [applications]);

    // Applications Metrics

    const { TIMEMetric, functionalFitMetric, technicalFitMetric, 
        businessCriticalityMetric, hostingTypeMetric } = applicationMetrics;

    return (
    <>
        <Container fluid>
            <Row>
                <Col xs={8} md style={{...colors.skyblue}}>
                    <span style={{fontWeight:'normal', fontSize:'2em'}}>
                        Functional Fit
                    </span>
                    {/* <ul>
                        <li>Excellent: {functionalFitMetric.excellent}</li>
                        <li>Adequate: {functionalFitMetric.adequate}</li>
                        <li>Insufficient: {functionalFitMetric.insufficient}</li>
                        <li>Poor: {functionalFitMetric.poor}</li>
                        <li>Missing Data: {functionalFitMetric.missing}</li>
                    </ul> */}
                </Col>
                <Col xs={12} md style={{...colors.steelblue}}>
                     <span style={{fontWeight:'normal', fontSize:'2em'}}>
                        Technical Fit
                    </span>
                    {/* <ul>
                        <li>Excellent: {technicalFitMetric.excellent}</li>
                        <li>Adequate: {technicalFitMetric.adequate}</li>
                        <li>Insufficient: {technicalFitMetric.insufficient}</li>
                        <li>Poor: {technicalFitMetric.poor}</li>
                        <li>Missing Data: {technicalFitMetric.missing}</li>
                    </ul> */}
                </Col>

            </Row>
            <Row>
                <Col xs={12} md={6} style={{...colors.powderblue}}>
                    <span style={{fontWeight:'normal', fontSize:'2em'}}>
                        Business Criticality
                    </span>
                    <ul>
                        <li>Administrative Service: {businessCriticalityMetric.administrativeService}</li>
                        <li>Business Operational: {businessCriticalityMetric.businessOperational}</li>
                        <li>Business Critical: {businessCriticalityMetric.businessCritical}</li>
                        <li>Mission Critical: {businessCriticalityMetric.missionCritical}</li>
                        <li>Missing Data: {businessCriticalityMetric.missing}</li>
                    </ul>
                </Col>
                <Col xs={12} md={5} style={{...colors.steelblue, padding:'1em'}}>
                    <span style={{fontWeight:'normal', fontSize:'1.5em'}}>
                        Calculated TIME Model Suggestion 
                    </span>
                    <ul>
                        <li>Tolerate: {TIMEMetric.tolerate}</li>
                        <li>Invest: {TIMEMetric.invest}</li>
                        <li>Migrate: {TIMEMetric.migrate}</li>
                        <li>Eliminate: {TIMEMetric.eliminate}</li>
                        <li>Missing Data: {TIMEMetric.missing}</li>
                    </ul>
                </Col>
                <Col xs={12} md={8}></Col>
            </Row>
            <Row>
                <Col xs={12} md style={{...colors.skyblue}}>
                    <div style={{display:'flex', flexDirection:'row-reverse'}}>
                        <span style={{fontWeight:'normal', fontSize:'1em'}}>
                            On Premise
                        </span>
                    </div>
                    <div style={centerInBox}>
                        <span style={{fontWeight:'bold', fontSize:'2em'}}>{hostingTypeMetric.onPremise}</span>
                    </div>
               </Col>
                <Col xs={12} md style={{...colors.skyblue}}>
                    <div style={{display:'flex', flexDirection:'row-reverse'}}>
                        <span style={{fontWeight:'normal', fontSize:'1em'}}>
                            Co-Located
                        </span>
                    </div>
                    <div style={centerInBox}>
                        <span style={{fontWeight:'bold', fontSize:'2em'}}>{hostingTypeMetric.coLocated}</span>
                    </div>
                </Col>
                <Col xs={12} md style={{...colors.powderblue}}>
                    <div style={{display:'flex', flexDirection:'row-reverse'}}>
                        <span style={{fontWeight:'normal', fontSize:'1em'}}>
                            IaaS
                        </span>
                    </div>
                    <div style={centerInBox}>
                        <span style={{fontWeight:'bold', fontSize:'2em'}}>{hostingTypeMetric.IaaS}</span>
                    </div>
                </Col>
                <Col xs={12} md style={{...colors.skyblue}}>
                    <div style={{display:'flex', flexDirection:'row-reverse'}}>
                        <span style={{fontWeight:'normal', fontSize:'1em'}}>
                            PaaS
                        </span>
                    </div>
                    <div style={centerInBox}>
                        <span style={{fontWeight:'bold', fontSize:'2em'}}>{hostingTypeMetric.PaaS}</span>
                    </div>
                </Col>
                <Col xs={12} md style={{...colors.steelblue}}>
                    <div style={{display:'flex', flexDirection:'row-reverse'}}>
                        <span style={{fontWeight:'normal', fontSize:'1em'}}>
                            SaaS
                        </span>
                    </div>
                    <div style={centerInBox}>
                        <span style={{fontWeight:'bold', fontSize:'2em'}}>{hostingTypeMetric.SaaS}</span>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
    );
};

export default ApplicationsDashboard;