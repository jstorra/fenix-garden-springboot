package com.campus.fenixgarden.models;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Component
public class TransformResultList {
    public static List<Map<Object, Object>> transformResultList(List<Object[]> results, String... fields) {
        List<Map<Object, Object>> transformedResults = new ArrayList<>();

        for (Object[] result : results) {
            Map<Object, Object> entry = new LinkedHashMap<>();
            for (int i = 0; i < fields.length; i++) {
                entry.put(fields[i], result[i]);
            }
            transformedResults.add(entry);
        }

        return transformedResults;
    }
}
