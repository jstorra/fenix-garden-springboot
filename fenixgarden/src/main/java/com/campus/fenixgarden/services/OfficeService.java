package com.campus.fenixgarden.services;

import com.campus.fenixgarden.models.Office;
import com.campus.fenixgarden.models.TransformResultList;
import com.campus.fenixgarden.models.dtos.OfficeDTO;
import com.campus.fenixgarden.repositories.OfficeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class OfficeService {
    @Autowired
    OfficeRepository officeRepository;

    public List<OfficeDTO> getAllOffices() {
        return officeRepository.findAll().stream()
                .map(Office::toDTO)
                .toList();
    }

    // 1)
    public List<Map<Object, Object>> listOfficeCodeAndCity() {
        List<Object[]> results = officeRepository.listOfficeCodeAndCity();
        return TransformResultList.transformResultList(results, "officeCode", "city");
    }

    // 2)
    public List<Map<Object, Object>> listCityAndPhoneOfSpanishOffices() {
        List<Object[]> results = officeRepository.listCityAndPhoneOfSpanishOffices();
        return TransformResultList.transformResultList(results, "officeCode", "city", "phone");
    }

    // 3)
    public List<String> listOfficeAddressesWithClientsInFuenlabrada() {
        return officeRepository.listOfficeAddressesWithClientsInFuenlabrada();
    }

    // 4)
    public List<OfficeDTO> findOfficesWithoutFruitOrders(){
        return officeRepository.findOfficesWithoutFruitOrders().stream()
                .map(Office::toDTO)
                .toList();
    }
}
