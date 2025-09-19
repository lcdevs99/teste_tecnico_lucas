SELECT 
    p.id AS professor_id,
    p.name AS professor_name,
    SUM(EXTRACT(EPOCH FROM (cs.end_time - cs.start_time)) / 3600) AS total_hours
FROM 
    PROFESSOR p
JOIN 
    CLASS c ON c.professor_id = p.id
JOIN 
    CLASS_SCHEDULE cs ON cs.class_id = c.id
GROUP BY 
    p.id, p.name
ORDER BY 
    total_hours DESC;

