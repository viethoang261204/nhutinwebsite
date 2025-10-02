// Simple i18n utility - Fixed version
(function(){
    'use strict';
    
    var dictionaries = {
        vi: {
            nav_home: 'Trang chủ',
            nav_apps: 'Lĩnh vực ứng dụng',
            nav_tagline: 'Đại lý/đối tác ủy quyền của KEITH® Mfg. Co, tại Việt Nam',
            apps_biomass: 'Biomass',
            apps_coal: 'Than đá',
            apps_construction: 'Vật liệu xây dựng',
            apps_fertilizer: 'Phân bón',
            apps_waste: 'Rác thải',
            nav_products: 'Sản phẩm',
            prod_running_floor_ii: 'Running Floor II',
            prod_kmd: 'KMD',
            prod_sdrive: 'S-Drive',
            prod_floor_boards: 'Thanh sàn',
            prod_system_integration: 'Sự phối hợp hệ thống',
            nav_news: 'Tin tức',
            nav_downloads: 'Tài liệu & tải về',
            nav_about: 'Về chúng tôi',
            nav_keith: 'Keith',
            nav_nhutin: 'Như Tín',
            nav_website_nhutin: 'Website Như Tín',
            footer_note: 'Đại lý / đối tác ủy quyền của KEITH® Mfg. Co, tại Việt Nam',
            footer_address: 'Địa chỉ',
            footer_links: 'Liên kết',
            footer_home: 'Trang chủ',
            footer_about_nhutin: 'Như Tín',
            footer_about_keith: 'KEITH®',
            footer_apps: 'Lĩnh vực ứng dụng',
            footer_products: 'Sản phẩm',
            footer_connect: 'Kết nối',
            footer_office_label: 'Văn Phòng:',
            footer_factory_label: 'Nhà xưởng:',
            footer_phone_label: 'Điện thoại:',
            footer_email_label: 'Email:',
            home_contact_free: 'Liên hệ tư vấn miễn phí',
            // Hero section
            hero_title: 'Giải pháp vận tải thông minh',
            hero_subtitle: 'Đối tác ủy quyền của KEITH® Mfg. Co, tại Việt Nam',
            hero_feature_1: 'Bền bỉ theo thời gian',
            hero_feature_2: 'Tiện lợi trong từng chuyến hàng',
            hero_feature_3: 'Hiệu quả trong mọi giải pháp',
            hero_feature_4: 'Đối tác tin cậy của bạn',
            // About section
            about_how_it_works: 'Cách hoạt động',
            about_description: 'Hệ thống sàn trượt tự đổ KEITH® WALKING FLOOR® vận hành bằng thủy lực, sử dụng loạt thanh sàn để "đẩy" vật liệu ra ngoài một cách an toàn và hiệu quả.',
            about_advantages_title: 'Ưu điểm vượt trội',
            about_advantage_1: 'Hiệu quả gấp 4 lần so với phương thức vận tải thông thường.',
            about_advantage_2: 'Chi phí đầu tư chỉ bằng 1/5 giá trị phương tiện, gần như không phát sinh chi phí vận hành thêm.',
            about_advantage_3: 'Không cần mua thêm xe, tuyển thêm tài xế hay nhân công bốc dỡ.',
            about_advantage_4: 'Vận hành an toàn ngay cả trong điều kiện bến bãi, nhà xưởng hạn chế.',
            about_applications_title: 'Ứng dụng linh hoạt',
            about_app_1: 'Nông sản: ngô, khoai, sắn, vỏ hạt điều.',
            about_app_2: 'Sinh khối: dăm gỗ, mùn cưa, vỏ trấu.',
            about_app_3: 'Nhiên liệu: than.',
            about_app_4: 'Thức ăn gia súc.',
            about_app_5: 'Vật liệu xây dựng.',
            about_app_6: 'Rác thải, phế liệu.',
            about_global_tech_title: 'Công nghệ toàn cầu',
            about_global_tech_1: 'Phát minh và cải tiến hơn 70 năm bởi Keith Manufacturing (Mỹ), sản xuất tại 5 nhà máy ở Mỹ & Châu Âu, ứng dụng rộng rãi tại Âu – Mỹ.',
            about_global_tech_2: 'Tại Việt Nam, chúng tôi tiên phong triển khai thành công công nghệ này hơn 8 năm qua, mang lại hiệu quả thiết thực cho chủ phương tiện và lợi ích xã hội.',
            // Features section
            features_why_choose: 'Vì sao chọn',
            feature_1_title: 'Hiệu quả vượt trội',
            feature_1_desc: 'Tăng gấp 4 lần năng suất vận chuyển so với phương thức truyền thống.',
            feature_2_title: 'Tiết kiệm chi phí',
            feature_2_desc: 'Đầu tư ban đầu thấp, gần như không phát sinh thêm chi phí vận hành.',
            feature_3_title: 'An toàn & tin cậy',
            feature_3_desc: 'Vận hành ổn định trong mọi điều kiện bến bãi, nhà xưởng.',
            feature_4_title: 'Ứng dụng linh hoạt',
            feature_4_desc: 'Phù hợp nhiều loại hàng: nông sản, sinh khối, nhiên liệu, VLXD, rác thải...',
            feature_5_title: 'Công nghệ toàn cầu',
            feature_5_desc: 'Giải pháp từ Mỹ & Châu Âu, ứng dụng rộng rãi tại hơn 60 quốc gia.',
            feature_6_title: 'Tiên phong tại Việt Nam',
            feature_6_desc: 'Hơn 8 năm triển khai thành công, được nhiều doanh nghiệp tin tưởng.',
            // Company section
            company_who_title: 'Chúng tôi là ai?',
            company_who_desc_1: 'Công ty Cổ Phần Như Tín hoạt động trong lĩnh vực vận tải hàng rời từ năm 2010. Chúng tôi thấu hiểu những khó khăn trong việc bốc dỡ – chuyển dỡ hàng hóa từ xe xuống kho bãi nhà máy.',
            company_who_desc_2: 'Qua nhiều năm triển khai, chúng tôi tiên phong đầu tư hệ thống bốc dỡ hàng hóa tự động dùng sàn trượt tự đổ KEITH® WALKING FLOOR®. Giải pháp giúp khách hàng tăng năng suất, an toàn và hiệu quả vận hành.',
            company_see_more: 'Xem thêm',
            company_solution_title: 'Giải Pháp Của Chúng Tôi?',
            company_solution_desc_1: 'Chúng tôi tập trung tự động hóa khâu bốc dỡ – bốc đổ hàng rời bằng KEITH® WALKING FLOOR®, giúp rút ngắn thời gian dừng xe và tối ưu chi phí vận hành.',
            company_solution_desc_2: 'Giải pháp được chứng minh tại nhiều doanh nghiệp: an toàn, giảm nhân công, tăng lợi nhuận nhờ quy trình xả hàng tự động cho xe tải, xe thùng, moóc, container.',
            // Mission section
            mission_title: 'NHIỆM VỤ CỦA CHÚNG TÔI',
            mission_service_1_title: 'Hiệu quả',
            mission_service_1_desc: 'Giúp chủ phương tiện tăng gấp nhiều lần năng suất vận tải so với phương thức truyền thống.',
            mission_service_2_title: 'Tiết kiệm',
            mission_service_2_desc: 'Giảm chi phí đầu tư, vận hành và nhân công, mang lại lợi ích kinh tế bền vững.',
            mission_service_3_title: 'An toàn',
            mission_service_3_desc: 'Đảm bảo quá trình bốc dỡ và vận chuyển diễn ra ổn định trong mọi điều kiện.',
            mission_service_4_title: 'Bền vững',
            mission_service_4_desc: 'Hướng tới giải pháp vận tải thân thiện với môi trường, đóng góp cho lợi ích xã hội.',
            // FAQ section
            faq_title: 'Câu Hỏi Thường Gặp',
            faq_subtitle: 'Những thắc mắc phổ biến về hệ thống sàn tự đổ KEITH® WALKING FLOOR®',
            faq_q1: '1. Sàn tự đổ KEITH® WALKING FLOOR® là gì và nó hoạt động như thế nào?',
            faq_a1: 'Sàn tự đổ KEITH® WALKING FLOOR® là một hệ thống xử lý vật liệu độc đáo sử dụng một loạt các thanh chuyển động qua lại để di chuyển các vật liệu rời vào và ra khỏi xe hoặc hệ thống cố định. Nó được thiết kế cho quá trình tải và dỡ hàng hiệu quả, an toàn và tự động.',
            faq_q2: '2. Tại sao tôi nên chọn sàn tự đổ KEITH® WALKING FLOOR®?',
            faq_a2: 'Keith Manufacturing Co. chuyên về các giải pháp tùy chỉnh phù hợp với nhu cầu xử lý vật liệu cụ thể của bạn, đảm bảo rằng hệ thống phù hợp hoàn hảo với thông số kỹ thuật của bạn. Hệ thống của họ nổi tiếng về độ tin cậy và hiệu quả.',
            faq_q3: '3. Sàn tự đổ KEITH® WALKING FLOOR® có phải là hệ thống đáng tin cậy không?',
            faq_a3: 'Có, hệ thống sàn tự đổ KEITH® WALKING FLOOR® có độ tin cậy cao. Chúng được thiết kế để đảm bảo độ bền và tuổi thọ cao, luôn sẵn có sự hỗ trợ để khắc phục sự cố và bảo trì.',
            faq_q4: '4. Hệ thống sàn tự đổ KEITH® WALKING FLOOR® có thể được tùy chỉnh theo nhu cầu của tôi không?',
            faq_a4: 'Chắc chắn. Keith chuyên thiết kế các giải pháp tùy chỉnh phù hợp với yêu cầu xử lý vật liệu riêng của bạn, đảm bảo hệ thống được điều chỉnh hoàn hảo theo nhu cầu của bạn.',
            faq_q5: '5. Hệ thống sàn tự đổ KEITH® WALKING FLOOR® có thể xử lý những loại vật liệu nào?',
            faq_a5: 'Hệ thống sàn tự đổ KEITH® WALKING FLOOR® rất linh hoạt và có thể xử lý nhiều loại vật liệu, bao gồm hàng rời, đồ tái chế, nông sản, v.v., khiến chúng phù hợp với nhiều ngành công nghiệp khác nhau.',
            faq_q6: '6. Sàn tự đổ KEITH® WALKING FLOOR® cải thiện sự an toàn cho người lái xe như thế nào?',
            faq_a6: 'Hệ thống cho phép tải và dỡ hàng tự động, giúp người lái xe tránh xa phía sau xe moóc và giảm nguy cơ chấn thương liên quan đến việc xử lý thủ công.',
            faq_q7: '7. Có bất kỳ lựa chọn đào tạo hoặc hỗ trợ nào dành cho hệ thống sàn tự đổ KEITH® WALKING FLOOR® không?',
            faq_a7: 'Keith cung cấp hỗ trợ toàn diện, đảm bảo nhóm của bạn có thể vận hành hệ thống một cách hiệu quả và an toàn.',
            faq_q8: '8. Mức độ sẵn có của các bộ phận và dịch vụ dành cho hệ thống sàn tự đổ KEITH® WALKING FLOOR® phổ biến đến mức nào?',
            faq_a8: 'Với hơn 100 đại lý trên toàn thế giới, việc tìm kiếm các bộ phận và dịch vụ cho hệ thống sàn tự đổ Keith thật dễ dàng, đảm bảo thời gian ngừng hoạt động tối thiểu và hiệu quả hoạt động nhất quán.',
            faq_q9: '9. Điều gì khiến hệ thống sàn tự đổ của Keith trở thành khoản đầu tư tốt hơn so với các thương hiệu khác?',
            faq_a9: 'Keith tập trung vào các giải pháp được thiết kế theo yêu cầu, kết hợp với danh tiếng về độ bền, hiệu quả và sự hỗ trợ tuyệt vời, đảm bảo lợi tức đầu tư cao bằng cách tối ưu hóa hoạt động của bạn và giảm thiểu chi phí bảo trì.',
            faq_q10: '10. Tôi có thể tìm thêm thông tin hoặc liên hệ với Keith Manufacturing Co. ở đâu?',
            faq_a10: 'Bạn có thể truy cập trang web keithwalkingfloor.vn hoặc gọi hotline: 090.791.7301 để biết thêm thông tin.',
            // Newsletter section
            newsletter_title: 'Liên hệ ngay với chúng tôi!',
            newsletter_subtitle: 'Uy Tín – Kinh Nghiệm – Tận Tâm',
            newsletter_cta: 'NHẮN TIN ZALO VỚI CHÚNG TÔI',
            // ungdung.html - Hero
            apps_hero_title: 'Lĩnh vực ứng dụng',
            apps_hero_subtitle: 'KEITH® Walking Floor® Việt Nam',
            // ungdung.html - Solution section
            apps_solution_title: 'Giải pháp Keith® Walking Floor® VN, Sàn trượt tự động cho xe tải, container và rơ-moóc',
            apps_solution_p1: 'Bạn đang tìm một giải pháp bốc dỡ hàng hóa nhanh chóng, an toàn và tiết kiệm chi phí? Công nghệ sàn trượt tự động Keith® Walking Floor® chính là lựa chọn tối ưu. Hệ thống được thiết kế thông minh, sử dụng cơ chế các tấm sàn di chuyển tuần tự để xếp và dỡ hàng mà không cần xe nâng hay máy xúc, giúp quá trình vận tải trở nên đơn giản và hiệu quả hơn bao giờ hết.',
            apps_solution_p2: 'Với khả năng chịu tải từ 10 đến 80 tấn, Walking Floor® phù hợp cho nhiều loại hàng hóa: nông sản, phân bón, hạt nhựa, than đá, rác thải tái chế, hàng đóng bao và pallet. Đặc biệt, công nghệ này giúp doanh nghiệp tiết kiệm thời gian bốc dỡ lên tới 70%, giảm chi phí nhân công và hạn chế tối đa rủi ro hư hỏng hàng hóa.',
            apps_solution_p3: 'Không chỉ bền bỉ và dễ bảo trì, hệ thống còn có thể tích hợp điều khiển từ xa, cảm biến an toàn và kết nối giám sát thông minh, mang lại sự an tâm tuyệt đối trong vận hành. Đây là giải pháp hiện đại đang được nhiều doanh nghiệp vận tải và kho bãi tại Việt Nam lựa chọn để nâng cao năng suất và tăng sức cạnh tranh trên thị trường.',
            apps_solution_cta_strong: '👉 Liên hệ ngay 0907917301',
            apps_solution_cta_tail: 'để nhận tư vấn chi tiết về Keith® Walking Floor® Việt Nam và khám phá giải pháp bốc dỡ hàng hóa tự động phù hợp nhất cho doanh nghiệp của bạn.',
            apps_solution_video1_caption: 'Thùng xe lắp sàn tự đổ mùn cưa',
            apps_solution_video2_caption: 'Container 40 feet lắp sàn tự đổ dăm gỗ',
            apps_section_lead: 'Bên dưới là một số phương tiện thực tế tiêu biểu đã đưa vào vận hành bởi các khách hàng của chúng tôi.',
            apps_section_item1: 'Moóc lồng 12m tự đổ rác thải nhà máy giấy',
            apps_section_item2: 'Thùng xe với Sàn trượt tự đổ viên nén trấu',
            apps_section_item3: 'Thùng xe tải lắp sàn tự đổ viên nén bã điều',
            apps_section_item4: 'Container 40ft lắp sàn trượt tự đổ sinh khối bã điều',
            // ungdung.html - Biomass
            apps_biomass_title: 'Công dụng trong lĩnh vực Biomass',
            apps_biomass_intro: 'Biomass thường gồm các loại vật liệu rời như dăm gỗ, mùn cưa, vỏ trấu, bã nông lâm sản, viên nén sinh khối (pellet) v.v. Các công dụng của Walking Floor trong Biomass là:',
            apps_biomass_card1_title: 'Nhận vật liệu',
            apps_biomass_card1_text: 'Từ xe đưa nguyên liệu vào, hệ thống có thể nhận vật liệu từ trailer hoặc xe tải mà không cần ben hay nâng hạ quá phức tạp.',
            apps_biomass_card2_title: 'Lưu trữ tạm thời',
            apps_biomass_card2_text: 'Lưu biomass chờ xử lý / đốt / nghiền. Với bin cố định, Walking Floor có thể chứa một khối lượng lớn và cấp liệu đều theo nhu cầu.',
            apps_biomass_card3_title: 'Cấp liệu / đo đếm',
            apps_biomass_card3_text: 'Đưa biomass từ nơi lưu trữ đến nơi xử lý với tốc độ điều chỉnh được, ổn định, tránh tắc nghẽn hoặc ngưng trệ.',
            apps_biomass_card4_title: 'Xả / đổ vật liệu',
            apps_biomass_card4_text: 'Đẩy biomass ra khỏi xe hoặc bin xuống hệ thống tiếp theo mà không cần nhân công nhiều, không cần nghiêng xe.',
            apps_biomass_benefits_title: 'Lợi ích khi sử dụng cho Biomass',
            apps_table_th_benefit: 'Lợi ích',
            apps_table_th_explain: 'Giải thích',
            apps_biomass_b1_title: 'Tăng năng suất / giảm thời gian xử lý',
            apps_biomass_b1_text: 'Việc nhận, xả và cấp liệu được tự động hóa, nhanh, đều — so với thủ công hoặc dùng xe ben phải đổ → giảm thời gian xe dừng, giảm thời gian chờ trong kho.',
            apps_biomass_b2_title: 'Giảm chi phí lao động & rủi ro an toàn',
            apps_biomass_b2_text: 'Ít cần nhân công bốc xếp tay, giảm nguy cơ tai nạn khi thao tác vật liệu rời, giảm mệt mỏi, rủi ro do bụi, trượt, vật liệu rơi.',
            apps_biomass_b3_title: 'Khả năng vận hành trong không gian hạn chế',
            apps_biomass_b3_text: 'Xe không cần nghiêng, không cần mái hiên cao để đổ, nên có thể vào kho, vào nhà máy có trần thấp hơn; dễ bố trí trong môi trường có giới hạn địa hình.',
            apps_biomass_b4_title: 'Độ ổn định của luồng vật liệu và chi phí bảo trì thấp',
            apps_biomass_b4_text: 'Hệ thống Slat + Drive thủy lực được thiết kế để chịu mài mòn, có nhiều loại thanh sàn tùy loại vật liệu. Luồng cấp liệu đều giảm hiện tượng "kẹt" vật liệu.',
            apps_biomass_b5_title: 'Tiết kiệm tổng chi phí sở hữu (TCO)',
            apps_biomass_b5_text: 'Dù đầu tư ban đầu có thể cao hơn hệ thống đơn giản, nhưng giảm chi phí lao động, giảm thời gian ngừng máy, bảo trì, tối ưu hóa hoạt động dẫn tới chi phí vận hành thấp hơn trong dài hạn.',
            apps_biomass_b6_title: 'Linh hoạt & tùy chỉnh cao',
            apps_biomass_b6_text: 'Có thể thiết kế hệ thống bin, số lượng slats, loại vật liệu sàn trượt, kích thước tia, tốc độ vận hành, kiểu bin để phù hợp từng loại biomass, từng quy mô nhà máy.',
            apps_biomass_b7_title: 'Giảm lãng phí và hao hụt vật liệu',
            apps_biomass_b7_text: 'Vì sàn có thể trượt hết vật liệu ra ngoài, hạn chế phần còn lại "dính" trong thùng / bin → giảm hao hụt biomass.',
            apps_biomass_videos_title: 'Video minh họa ứng dụng Biomass',
            apps_coal_title2: 'Công dụng trong lĩnh vực than đá',

            apps_coal_card1_title: 'Nhận than từ xe tải / toa tàu',
            apps_coal_card1_text: 'Than khi được vận chuyển đến nhà máy điện hoặc nhà máy chế biến than có thể được đổ vào các bin chứa sử dụng Walking Floor thay vì xe ben.',

            apps_coal_card2_title: 'Lưu trữ tạm thời và phân phối',
            apps_coal_card2_text: 'Các kho chứa than, kho trung chuyển – sử dụng Walking Floor để cấp than vào băng tải, lò đốt, máy nghiền,… với lưu lượng đều.',

            apps_coal_card3_title: 'Xả than / dỡ than',
            apps_coal_card3_text: 'Khi phải lấy than ra từ container, xe tải, xe toa, sử dụng sàn trượt giúp xả sạch, hạn chế than đọng lại.',

            apps_coal_card4_title: 'Truyền than (metering / feeding)',
            apps_coal_card4_text: 'Đưa than vào lò, buồng đốt, hoặc vào máy nghiền — điều khiển lưu lượng đầu vào để ổn định quá trình đốt hoặc nghiền, tối ưu hiệu suất.',

            apps_coal_card5_title: 'Giảm bụi & ô nhiễm',
            apps_coal_card5_text: 'Với việc vận chuyển, xả bằng Walking Floor, có thể thiết kế ít bung bụi hơn so với đổ than từ trên cao hoặc nghiêng xe.',

            apps_coal_benefits_title: 'Lợi ích khi dùng Keith Walking Floor cho than đá',

            apps_coal_th_benefit: 'Lợi ích',
            apps_coal_th_explain: 'Giải thích đặc thù than đá',

            apps_coal_b1_title: 'Vận hành ổn định & đều',
            apps_coal_b1_text: 'Than đá có trọng lượng lớn, kích thước đa dạng; Walking Floor giúp cấp liệu đều, tránh "đột ngột" — giúp lò đốt hoặc máy nghiền hoạt động ổn định.',

            apps_coal_b2_title: 'Giảm hao hụt than và loại bỏ tắc nghẽn',
            apps_coal_b2_text: 'Than đá dễ bị vón, bám thành lớp; nếu dùng hệ thống đổ thông thường có thể còn lại rất nhiều than trong thùng xe/bin. Walking Floor giúp đẩy hầu như hết than đá ra ngoài, hạn chế phần "chết" còn lại.',

            apps_coal_b3_title: 'An toàn & giảm sự cố',
            apps_coal_b3_text: 'Giảm rủi ro lao động khi bốc xúc than, giảm khả năng than rơi, giảm bụi than—tất cả giúp giảm nguy cơ cháy nổ do bụi than, nguy hiểm về hô hấp cho công nhân.',

            apps_coal_b4_title: 'Chi phí vận hành thấp hơn trong dài hạn',
            apps_coal_b4_text: 'Ít công nhân bốc xúc bằng tay, ít máy móc phụ trợ (xe ben đổ, máy xúc), ít hư hại thiết bị do vận hành cẩu nâng, nghiêng xe.',

            apps_coal_b5_title: 'Thích ứng với điều kiện cơ sở hạ tầng hạn chế',
            apps_coal_b5_text: 'Nếu trần nhà kho thấp, hoặc không thể nghiêng xe nhiều, hoặc vị trí không thuận tiện để thiết đặt băng tải nghiêng, Walking Floor có thể là giải pháp phù hợp.',

            apps_coal_b6_title: 'Tối ưu hóa hiệu suất nhiệt / nhiên liệu',
            apps_coal_b6_text: 'Khi cấp than đều vào lò đốt, nhiệt độ ổn định hơn, cháy tốt hơn, giảm lượng than phải cấp thêm để bù đắp hoạt động không ổn định.',
            apps_construction_title2: 'Công dụng với vật liệu xây dựng',

            apps_construction_card1_title: 'Nhận vật liệu xây dựng',
            apps_construction_card1_text: 'Xe tải chở cát, đá nhỏ, sỏi, xi măng rời, phụ gia,... vào kho hoặc trung chuyển; Walking Floor giúp nhận vật liệu mà không cần phương pháp đổ truyền thống.',

            apps_construction_card2_title: 'Lưu trữ tạm thời',
            apps_construction_card2_text: 'Chứa vật liệu xây dựng trong bin cố định, tại công trường hoặc kho nguyên liệu; dùng để ổn định nguồn cấp cho công trình khi nhu cầu dao động.',

            apps_construction_card3_title: 'Cấp liệu vào dây chuyền',
            apps_construction_card3_text: 'Dây chuyền trộn bê tông, máy trộn, máy nghiền đá, máy cắt / máy đổ; cung cấp đều, có thể điều chỉnh tốc độ để phù hợp nhu cầu.',

            apps_construction_card4_title: 'Xả / dỡ vật liệu xây dựng',
            apps_construction_card4_text: 'Đá, sỏi, bê tông vụn,... từ xe hoặc cont; Walking Floor "đẩy" vật liệu ra ngoài không cần nghiêng xe, giúp dỡ nhanh hơn.',

            apps_construction_card5_title: 'Phân phối / đo đếm',
            apps_construction_card5_text: 'Có thể tích hợp đo lưu lượng vật liệu cấp vào máy trộn để đảm bảo đúng tỉ lệ phối liệu, hạn chế sai sót.',

            apps_construction_benefits_title: 'Lợi ích khi dùng cho vật liệu xây dựng',

            apps_construction_th_benefit: 'Lợi ích',
            apps_construction_th_explain: 'Giải thích cụ thể vật liệu xây dựng',

            apps_construction_b1_title: 'Tốc độ & hiệu suất cao hơn',
            apps_construction_b1_text: 'Việc nhận và xả vật liệu nhanh, đều, giúp giảm thời gian chờ xe tải hoặc công nhân bốc xúc – đặc biệt hữu ích khi dự án xây dựng có khối lượng lớn cần cung ứng nhanh.',

            apps_construction_b2_title: 'Giảm hao hụt & tối ưu sử dụng vật liệu',
            apps_construction_b2_text: 'Vật liệu xây dựng nhỏ như cát, đá mạt nếu còn lại nhiều trong xe / bin thì bị bỏ phí; Walking Floor giúp xả gần hết, giảm phần "chết".',

            apps_construction_b3_title: 'An toàn & giảm công sức lao động',
            apps_construction_b3_text: 'Giảm việc xúc, xúc tay, đào bới; hạn chế bụi khi xả – tốt cho môi trường công trường và sức khỏe công nhân.',

            apps_construction_b4_title: 'Linh hoạt trong bố trí công trường',
            apps_construction_b4_text: 'Nếu công trường không có diện tích hoặc địa hình ko cho xe nghiêng cao, hoặc trần nhà kho thấp – Walking Floor dễ bố trí hơn.',

            apps_construction_b5_title: 'Tăng ổn định khi phối liệu / trộn bê tông',
            apps_construction_b5_text: 'Cung cấp vật liệu đều giúp máy trộn vận hành ổn định, hỗ trợ chất lượng bê tông tốt hơn (giảm bọt khí, tăng đều các thành phần).',

            apps_construction_b6_title: 'Giảm chi phí bảo trì & vận hành',
            apps_construction_b6_text: 'Ít thiết bị phụ trợ như máy xúc, xe nâng, ít hao mòn so với việc di chuyển, xúc đẩy vật liệu nhiều lần; sàn có thể chọn vật liệu chịu mài mòn cao cho đá sỏi.',

            apps_construction_notes_title: 'Những lưu ý / hạn chế',
            apps_construction_notes_intro: 'Để áp dụng tốt, cần xem xét các điểm sau:',

            apps_construction_note1: 'Mài mòn: Vật liệu xây dựng như đá, sỏi có tính mài mòn cao, cần chọn vật liệu sàn chịu mài mòn để tăng tuổi thọ.',
            apps_construction_note2: 'Trọng lượng: Vật liệu rời nặng, cần đảm bảo công suất hệ thống phù hợp để vận hành ổn định.',
            apps_construction_note3: 'Bụi: Cát, xi măng, đá mạt tạo nhiều bụi, nên kết hợp hệ thống hút bụi để bảo vệ môi trường làm việc.',
            apps_construction_note4: 'Vật liệu vón / ẩm: Khi ẩm ướt, một số vật liệu có thể vón cục, dính bết — cần thiết kế chống bám dính tốt.',
            apps_construction_video_title: 'Video minh họa ứng dụng vật liệu xây dựng',
            
            // Waste section (Rác thải)
            apps_waste_title2: 'Công dụng với rác thải',
            apps_waste_card1_title: 'Nhận, xả rác từ xe tải / container / trailer',
            apps_waste_card1_text: 'Sàn trượt giúp xả rác ra khỏi xe / thùng chứa mà không cần nghiêng xe.',
            apps_waste_card2_title: 'Lưu trữ & phân phối rác',
            apps_waste_card2_text: 'Bin cố định hoặc kho chứa rác tạm (transfer station), sau đó cấp rác đều ra dây chuyền xử lý / phân loại.',
            apps_waste_card3_title: 'Cấp liệu định lượng / đo lưu lượng rác',
            apps_waste_card3_text: 'Cho máy phân loại, máy nghiền, máy ủ, hoặc các thiết bị xử lý tiếp theo.',
            apps_waste_card4_title: 'Vận chuyển nội bộ',
            apps_waste_card4_text: 'Giữa các khu của nhà máy xử lý rác / tái chế, hay từ kho chứa đến lò đốt / phân loại.',
            apps_waste_card5_title: 'Xử lý các loại rác hỗn hợp',
            apps_waste_card5_text: 'MSW, C&D, rác thực phẩm / rác hữu cơ (organics), rác bằng phẳng / bải thải tái chế.',
            apps_waste_benefits_title: 'Lợi ích khi áp dụng cho rác thải',
            apps_waste_th_benefit: 'Lợi ích',
            apps_waste_th_explain: 'Giải thích',
            apps_waste_b1_title: 'Tăng hiệu suất, giảm thời gian dỡ rác',
            apps_waste_b1_text: 'Xe tải dỡ nhanh hơn, không phụ thuộc vào thiết bị nâng lớn hay nghiêng xe; tiết kiệm thời gian chờ & nhân công.',
            apps_waste_b2_title: 'Giảm rủi ro an toàn / tai nạn',
            apps_waste_b2_text: 'Không cần nghiêng xe – nguy cơ đổ xe, trượt, chấn thương sẽ ít hơn. Việc tiếp xúc với vật liệu "nặng / lở" cũng ít hơn.',
            apps_waste_b3_title: 'Linh hoạt trong bố trí & vận hành',
            apps_waste_b3_text: 'Có thể sử dụng trong các khu vực giới hạn về không gian hoặc nơi xe không thể nghiêng cao; dùng hệ thống di động hoặc cố định; trailer sàn trượt vào được những nơi bãi rác hay trạm trung chuyển không có thiết bị ben.',
            apps_waste_b4_title: 'Khả năng xử lý nhiều loại rác khác nhau',
            apps_waste_b4_text: 'Từ rác nhẹ đến rác nặng hỗn hợp; từ rác xây dựng, vật liệu phá bỏ, rác sinh hoạt, rác hữu cơ; hệ thống điều chỉnh sàn, cấu hình phù hợp cho từng loại.',
            apps_waste_b5_title: 'Giảm chi phí vận hành & bảo trì trong dài hạn',
            apps_waste_b5_text: 'Dùng sàn thép mài mòn cao (như phiên bản "J-Max Steel Floor") để chịu rác nặng, giảm hỏng sàn; thay thế, bảo trì thưa hơn khi chọn đúng loại.',
            apps_waste_b6_title: 'Tối ưu hóa sử dụng không gian & thiết bị phụ trợ',
            apps_waste_b6_text: 'Không cần hệ thống ben hoặc thiết bị nghiêng; có thể dỡ rác trong nhà/kho có mái; trailer sàn trượt hữu ích cả khi mặt đất không bằng phẳng.',
            apps_waste_b7_title: 'Kiểm soát bụi & phát tán rác nhỏ',
            apps_waste_b7_text: 'Có thể trang bị nắp, bạt che, hoặc thiết kế giảm phát tán; xả rác đều, hạn chế bung rác ra ngoài.',
            apps_waste_notes_title: 'Những điểm cần lưu ý / thách thức',
            apps_waste_notes_detail1: 'Mài mòn mạnh: Rác hỗn hợp nhiều tạp chất cứng, sắc (ví dụ kim loại, kính, đá vụn…) có thể gây mài mòn mạnh sàn; cần chọn loại sàn chịu mài mòn, vật liệu slats phù hợp.',
            apps_waste_notes_detail2: 'Rác hữu cơ / thực phẩm ẩm, dính: Có thể dính vào sàn, gây tắc hoặc khó vệ sinh. Cần thiết kế dễ làm sạch, có hệ thống rửa / rung / vệ sinh.',
            apps_waste_notes_detail3: 'Mùi & vấn đề vệ sinh môi trường: Rác có mùi, phân hủy, có thể gây ra khí độc / vi khuẩn; cần biện pháp xử lý mùi & vệ sinh tốt.',
            apps_waste_notes_detail4: 'Kiểm soát bụi / phát tán mảnh vụn nhỏ: Khi xả / vận chuyển cần có biện pháp kiểm soát.',
            apps_waste_notes_detail5: 'Chi phí đầu tư ban đầu: Hệ thống làm kín, hệ thống sàn thép mài mòn, thiết bị trailer chuyên dụng có thể cao; cần tính toán lợi ích dài hạn.',
            apps_waste_video_title: 'Video minh họa ứng dụng rác thải',
            
            // Product page - Hero
            prod_hero_title: 'Sản phẩm',
            prod_hero_subtitle: 'Hệ thống sản phẩm KEITH® WALKING FLOOR®',
            
            // Product page - Running Floor II
            prod_rfii_title: 'KEITH® RUNNING FLOOR II™',
            prod_rfii_role_title: 'Vai Trò Trong Hệ Thống Sàn Trượt KEITH®',
            prod_rfii_adv_title: 'Ưu Điểm Nổi Bật',
            prod_rfii_benefit_title: 'Lợi Ích Kinh Doanh',
            prod_rfii_conclusion: 'KEITH® RUNNING FLOOR II™ – giải pháp truyền động chuẩn mực, mang lại sức mạnh và độ tin cậy cho toàn bộ hệ thống sàn trượt KEITH®®.',
            prod_rfii_p_intro: 'KEITH® RUNNING FLOOR II™ là <span class="kw">thế hệ truyền động thủy lực tiên tiến</span>, đóng vai trò "trái tim" của toàn bộ sàn trượt KEITH® WALKING FLOOR® – <span class="kw">công nghệ xả hàng tự động</span> được tin dùng toàn cầu. Đây chính là bộ phận then chốt giúp sàn di chuyển nhịp nhàng, bảo đảm quá trình dỡ hàng diễn ra <span class="kw">an toàn, nhanh chóng và liên tục</span>, không cần nâng ben.',
            prod_rfii_role_li1: '<span class="kw">Truyền động trung tâm</span>: RUNNING FLOOR II™ cung cấp lực đẩy thủy lực đồng bộ cho các thanh sàn, cho phép cả hệ thống "bước" tuần tự và di chuyển hàng hóa ra ngoài.',
            prod_rfii_role_li2: '<span class="kw">Tối ưu hiệu suất</span>: Giữ cho toàn bộ sàn vận hành mượt mà với tải trọng lớn (35–75 tấn), tốc độ xả đạt tới 3,8 m/phút mà không làm gián đoạn chuỗi cung ứng.',
            prod_rfii_role_li3: '<span class="kw">Bảo vệ kết cấu</span>: Thiết kế chống ăn mòn, ống thép thủy lực và các van dễ bảo trì giúp kéo dài tuổi thọ toàn bộ sàn trượt và giảm thời gian dừng máy.',
            prod_rfii_adv_li1: '<span class="kw">Xả hàng tự động – không cần nâng rơ-moóc</span>: An toàn tuyệt đối trong kho bãi trần thấp hoặc khu vực hạn chế chiều cao.',
            prod_rfii_adv_li2: '<span class="kw">Đa dạng ứng dụng</span>: Từ rác thải, nông sản, dăm gỗ đến vật liệu công nghiệp nặng.',
            prod_rfii_adv_li3: '<span class="kw">Công nghệ thủy lực mạnh mẽ</span>: 6 xi-lanh chịu áp lực tới 3000 PSI, vận hành ổn định trong mọi điều kiện khắc nghiệt.',
            prod_rfii_adv_li4: '<span class="kw">Bảo trì thuận tiện</span>: Cấu trúc modul, van bi và van điều khiển đặt ngoài giúp kiểm tra, thay thế nhanh chóng, giảm chi phí bảo dưỡng.',
            prod_rfii_benefit_li1: '<span class="kw">Tăng năng suất vận tải</span>: Dỡ hàng nhanh, rút ngắn thời gian quay đầu xe.',
            prod_rfii_benefit_li2: '<span class="kw">Giảm chi phí và rủi ro</span>: Loại bỏ nhu cầu nâng ben, hạn chế tai nạn lật xe, tiết kiệm nhân lực.',
            prod_rfii_benefit_li3: '<span class="kw">Gia tăng giá trị dịch vụ</span>: Mang lại hình ảnh chuyên nghiệp và lợi thế cạnh tranh bền vững cho doanh nghiệp.',
            
            // KMD section
            prod_kmd_intro: 'KMD 250/300 là cụm truyền động thủy lực (hydraulic drive unit) – "trái tim" của hệ thống sàn trượt tự dỡ hàng KEITH®.',
            prod_kmd_role_li1: 'Tạo chuyển động tịnh tiến cho các thanh sàn (slats), giúp đẩy hàng rời ra ngoài mà không cần nâng ben.',
            prod_kmd_role_li2: 'Lắp vào rơ-moóc hoặc thùng xe tải, cho phép chất/dỡ hàng lớn an toàn, nhanh và không cần thiết bị phụ.',
            prod_kmd_mechanism_title: 'Cơ chế thủy lực nhiều xy lanh:',
            prod_kmd_mechanism_li1: 'Gồm 3 cụm xy lanh liên kết qua các cross-drives.',
            prod_kmd_mechanism_li2: 'Dầu từ PTO qua van một chiều (check valve) và van đảo chiều (switching valve).',
            prod_kmd_stages_title: 'Nguyên lý 4 giai đoạn:',
            prod_kmd_stage1: 'Stage 1–3 (tái định vị): Mỗi lần ~1/3 thanh sàn trượt dưới tải, hàng không di chuyển.',
            prod_kmd_stage2: 'Stage 4: Tất cả thanh sàn di chuyển đồng thời, đẩy hàng về cửa xả.',
            prod_kmd_cycle: 'Chu kỳ lặp lại liên tục đến khi xả hết; khi nạp hàng, đảo chiều áp suất và thứ tự xy lanh theo hướng ngược lại.',
            prod_kmd_specs_li1: 'KMD 250: Ø2,5 in, tải ~8 tấn, tốc độ 3–6,5 ft/phút.',
            prod_kmd_specs_li2: 'KMD 300: Ø3,0 in, tải ~16 tấn, tốc độ 2–4 ft/phút.',
            prod_kmd_specs_li3: 'Áp suất 2.800–3.000 PSI; nhiệt độ dầu tối đa 60 °C; bơm khuyến nghị 5–6 gal/phút.',
            prod_kmd_specs_li4: 'Thiết kế module: drive frame, cross-drives, rod clamps, switching valve… dễ lắp đặt.',
            prod_kmd_table_feature: 'Đặc điểm',
            prod_kmd_table_250: 'KMD 250',
            prod_kmd_table_300: 'KMD 300',
            prod_kmd_cylinder_diameter: 'Đường kính xy lanh',
            prod_kmd_cylinder_stroke: 'Hành trình xy lanh',
            prod_kmd_safety_pressure: 'Áp suất van an toàn',
            prod_kmd_max_load: 'Tải trọng tối đa',
            prod_kmd_pump_flow: 'Lưu lượng bơm khuyến nghị',
            prod_kmd_floor_speed: 'Tốc độ sàn*',
            prod_kmd_oil_temp: 'Nhiệt độ dầu tối đa',
            
            // S-Drive section
            prod_sdrive_intro: 'KEITH® S-Drive™ là <span class="kw">bộ truyền động thủy lực cao cấp</span> được KEITH® Manufacturing Co. phát triển dành riêng cho toàn bộ hệ thống WALKING FLOOR®. Đây là "trái tim" giúp các thanh sàn (floor slats) di chuyển nhịp nhàng, cho phép <span class="kw">xả hoặc nạp hàng tự động</span> mà không cần nâng ben – bảo đảm <span class="kw">an toàn và tiết kiệm thời gian</span> cho mọi doanh nghiệp vận tải.',
            prod_sdrive_apps_li1: '<span class="kw">Vận tải hàng rời khối lượng lớn</span>: rác thải, dăm gỗ, nông sản, khoáng sản.',
            prod_sdrive_apps_li2: '<span class="kw">Logistics công nghiệp & kho bãi</span>: giải pháp bốc dỡ nhanh trong không gian trần thấp.',
            prod_sdrive_apps_li3: '<span class="kw">Xe moóc & container chuyên dụng</span>: tối ưu cho cả hệ thống sàn trượt KEITH® mới lắp hoặc nâng cấp.',
            prod_sdrive_mechanism_li1: '<span class="kw">Nguồn động lực</span>: S-Drive nhận công suất từ PTO (Power Take-Off) của đầu kéo.',
            prod_sdrive_mechanism_li2: '<span class="kw">Hệ thống thủy lực khép kín</span>: gồm bơm, ống áp suất – ống hồi, bình dầu và bộ lọc, cung cấp dầu áp lực cao cho các xi-lanh.',
            prod_sdrive_mechanism_li3: '<span class="kw">Chế độ vận hành kép</span>: <ul><li><strong>Load (nạp hàng)</strong>: sàn chuyển động về phía trước, đưa vật liệu vào khoang.</li><li><strong>Unload (xả hàng)</strong>: sàn "bước" tuần tự đẩy toàn bộ hàng hóa ra ngoài.</li></ul>',
            prod_sdrive_mechanism_li4: '<span class="kw">Điều khiển đơn giản</span>: van cầu (ball valve) cho phép ngắt/mở dầu thủy lực tức thì; van relief bảo vệ an toàn khi áp suất tăng đột ngột.',
            prod_sdrive_benefits_li1: '<span class="kw">Tối ưu hiệu suất vận tải</span>: giảm đáng kể thời gian bốc dỡ và quay đầu xe.',
            prod_sdrive_benefits_li2: '<span class="kw">An toàn tuyệt đối</span>: không cần nâng ben, hạn chế rủi ro lật xe và tai nạn lao động.',
            prod_sdrive_benefits_li3: '<span class="kw">Độ bền cao, bảo trì tối giản</span>: thiết kế modul, các van và khớp nối nhanh dễ kiểm tra, thay thế.',
            prod_sdrive_benefits_li4: '<span class="kw">Nâng tầm dịch vụ chuyên nghiệp</span>: mang lại hình ảnh hiện đại, tạo lợi thế cạnh tranh bền vững.',
            
            // S-Drive section titles (missing keys)
            prod_sdrive_apps_title: 'Ứng dụng nổi bật',
            prod_sdrive_mechanism_title: 'Cơ chế & nguyên lý vận hành',
            prod_sdrive_benefits_title: 'Lợi ích cho doanh nghiệp',
            prod_sdrive_refdocs_title: 'Tài liệu tham khảo',
            prod_sdrive_refdocs_subtitle: 'Tải xuống các tài liệu kỹ thuật chi tiết về KEITH® S-Drive™',
            prod_sdrive_refdoc1_title: 'KEITH® S-Drive Owners Manual',
            prod_sdrive_refdoc1_desc: 'Hướng dẫn sử dụng và vận hành chi tiết cho chủ sở hữu hệ thống KEITH® S-Drive.',
            
            // KMD section titles (missing keys)
            prod_kmd_sec1_title: '1. Vai trò trong hệ thống KEITH® WALKING FLOOR®',
            prod_kmd_sec2_title: '2. Cơ chế & Nguyên lý vận hành',
            prod_kmd_sec3_title: '3. Thông số & cấu hình',
            
            // Reference documents section (missing keys)
            prod_refdocs_title: 'Tài liệu tham khảo',
            prod_refdocs_subtitle: 'Tải xuống các tài liệu kỹ thuật chi tiết về KEITH® RUNNING FLOOR II™',
            prod_refdoc1_title: 'Keith Running Floor II DX Updated',
            prod_refdoc1_desc: 'Tài liệu cập nhật về hệ thống KEITH® Running Floor II DX với các thông số kỹ thuật mới nhất.',
            prod_refdoc2_title: 'KEITH® Running Floor II DX/DXE Owners Manual',
            prod_refdoc2_desc: 'Hướng dẫn sử dụng và vận hành chi tiết cho chủ sở hữu hệ thống KEITH® Running Floor II DX/DXE.',
            prod_refdoc3_title: 'Parts Running Floor Manual',
            prod_refdoc3_desc: 'Hướng dẫn về các bộ phận và phụ tùng thay thế cho hệ thống Running Floor.',
            
            // Technical specifications table headers (missing keys)
            prod_specs_title: 'Thông số kỹ thuật nổi bật',
            prod_specs_col_param: 'Thông số',
            prod_specs_col_value: 'Giá trị',
            prod_specs_col_note: 'Ghi chú',
            
            // KMD table cell values
            prod_kmd_250_cylinder_diameter: '2,5 in (64 mm)',
            prod_kmd_300_cylinder_diameter: '3,0 in (76 mm)',
            prod_kmd_250_stroke: '5 in (127 mm)',
            prod_kmd_300_stroke: '5 in (127 mm)',
            prod_kmd_250_pressure: '2.800–3.000 PSI',
            prod_kmd_300_pressure: '2.800–3.000 PSI',
            prod_kmd_250_load: '8 tấn (7,3 t)',
            prod_kmd_300_load: '16 tấn (14,5 t)',
            prod_kmd_250_flow: '5–6 gal/phút (18–22 L/phút)',
            prod_kmd_300_flow: '5–6 gal/phút (18–22 L/phút)',
            prod_kmd_250_speed: '3–6,5 ft/phút (1–2 m/phút)',
            prod_kmd_300_speed: '2–4 ft/phút (0,6–1,2 m/phút)',
            prod_kmd_250_temp: '140 °F (60 °C)',
            prod_kmd_300_temp: '140 °F (60 °C)',
            
            // Big technical specifications table
            prod_big_specs_cylinder_bore: 'Đường kính xilanh (Cylinder Bore Diameter)',
            prod_big_specs_cylinder_bore_value: '3.0 in (~76 mm), 3.5 in (~89 mm), 4.0 in (~102 mm)',
            prod_big_specs_cylinder_bore_note: 'Tùy chọn theo tải trọng & cấu hình rơ-moóc',
            prod_big_specs_cylinder_stroke: 'Stroke xilanh (Chiều dài hành trình)',
            prod_big_specs_cylinder_stroke_value: '~6.0 - 10.0 in tùy bore',
            prod_big_specs_cylinder_stroke_note: 'Xác định bởi cấu hình cụ thể',
            prod_big_specs_min_pressure: 'Áp suất làm việc tối thiểu',
            prod_big_specs_min_pressure_value: '2800 PSI (~193 bar)',
            prod_big_specs_min_pressure_note: 'Đây là mức áp suất cần thiết để hệ thống vận hành đúng',
            prod_big_specs_max_pressure: 'Áp suất làm việc tối đa',
            prod_big_specs_max_pressure_value: '3000 PSI (~207 bar)',
            prod_big_specs_max_pressure_note: 'Không vượt quá để bảo đảm an toàn và tuổi thọ',
            prod_big_specs_flow_rate: 'Lưu lượng dầu khuyến nghị (flow rate)',
            prod_big_specs_flow_rate_value: '40 – 60 gal/min (~151 - 227 lít/phút)',
            prod_big_specs_flow_rate_note: 'Để đạt hiệu suất tối ưu. Với lưu lượng thấp hơn vẫn hoạt động được nhưng tốc độ xả sẽ chậm hơn',
            prod_big_specs_min_flow: 'Lưu lượng tối thiểu chấp nhận được',
            prod_big_specs_min_flow_value: '~5 gal/min (~19 lít/phút)',
            prod_big_specs_min_flow_note: 'Cho vận hành ở mức nhẹ / tải thấp',
            prod_big_specs_floor_speed: 'Tốc độ sàn (với piston 3.0")',
            prod_big_specs_floor_speed_value: '~ 8.2 ft/phút tại 950 RPM với ~30 gal/min<br>~ 12.5 ft/phút tại ~ 1430 RPM với ~45 gal/min<br>~ 16.4 ft/phút tại ~1900 RPM với ~60 gal/min',
            prod_big_specs_floor_speed_note: 'Tương đương ~2.5 – 5 m/phút tùy điều kiện (độ dài xe, vật liệu, cấu hình)',
            prod_big_specs_hydraulic_oil: 'Dầu thủy lực khuyến nghị',
            prod_big_specs_hydraulic_oil_value: 'ISO-L-HM 46 hoặc tương đương',
            prod_big_specs_hydraulic_oil_note: 'Đảm bảo độ nhớt & tính ổn định nhiệt thích hợp',
            prod_big_specs_relief_valve: 'Van an toàn / relief valve',
            prod_big_specs_relief_valve_value: 'Set từ 2800 đến 3000 PSI',
            prod_big_specs_relief_valve_note: 'Phải là loại van chất lượng cao, có thể xả đầy lưu lượng bơm',
            prod_big_specs_wet_kit: 'Wet kit (bộ phụ kiện thủy lực đi kèm xe kéo / traktor)',
            prod_big_specs_wet_kit_value: 'Yêu cầu đường ống hút (suction line) ≤ ~1,5 m, đường kính tối thiểu ~2 in;<br>ống áp lực (pressure hose), ống hồi (return hose) đường kính phù hợp;<br>lắp bộ lọc dầu theo chỉ định;<br>bồn dầu có dung tích ~1 gal cho mỗi gal/min dự tính của bơm',
            prod_big_specs_wet_kit_note: '-',
            
            // S-Drive specifications table headers (missing keys)
            prod_sdrive_specs_title: 'Thông số kỹ thuật chuẩn (theo KEITH®)',
            prod_sdrive_specs_col_item: 'Hạng mục',
            prod_sdrive_specs_col_value: 'Giá trị khuyến nghị',
            
            // S-Drive specifications
            prod_sdrive_specs_max_pressure: 'Áp suất vận hành tối đa',
            prod_sdrive_specs_max_pressure_value: '2.800 – 3.000 PSI (~193 – 207 bar)',
            prod_sdrive_specs_flow_rate: 'Lưu lượng dầu khuyến nghị',
            prod_sdrive_specs_flow_rate_value: '40 – 60 gal/phút (151 – 227 lít/phút) để đạt tốc độ xả tối ưu',
            prod_sdrive_specs_min_flow: 'Lưu lượng tối thiểu chấp nhận',
            prod_sdrive_specs_min_flow_value: '~5 gal/phút (≈19 lít/phút)',
            prod_sdrive_specs_oil_type: 'Loại dầu thủy lực',
            prod_sdrive_specs_oil_type_value: 'ISO-L-HM 46 hoặc tương đương',
            prod_sdrive_specs_relief_valve: 'Van an toàn (relief valve)',
            prod_sdrive_specs_relief_valve_value: 'Cài đặt 2.800 – 3.000 PSI, đảm bảo bảo vệ toàn hệ thống',
            prod_sdrive_specs_wet_kit: 'Yêu cầu "wet kit"',
            prod_sdrive_specs_wet_kit_value: 'Ống hút ≤1,5 m, đường kính ≥2", bình dầu ≥1 gallon cho mỗi gallon/phút lưu lượng bơm',
            
           apps_construction_video_title: 'Video minh họa ứng dụng vật liệu xây dựng',

            apps_fertilizer_title2: 'Công dụng khi áp dụng cho phân bón',

            apps_fertilizer_card1_title: 'Nhận phân bón từ xe tải / bao chứa',
            apps_fertilizer_card1_text: 'Hệ thống giúp xả phân bón ra khỏi xe/trailer mà không cần lật xe, giảm thao tác thủ công.',

            apps_fertilizer_card2_title: 'Lưu trữ phân bón tạm thời',
            apps_fertilizer_card2_text: 'Giữ phân bón trong bin cố định, khi có nhu cầu thì cấp ra đều để trộn phân hoặc đóng gói.',

            apps_fertilizer_card3_title: 'Cấp liệu định lượng / đều đặn',
            apps_fertilizer_card3_text: 'Phân bón vào hệ thống trộn, máy đóng bao, dây chuyền sản xuất liên tục cần lượng phân bón ổn định. Walking Floor có thể cung cấp với lưu lượng ổn định, có thể điều chỉnh.',

            apps_fertilizer_card4_title: 'Xả phân bón nhanh & sạch',
            apps_fertilizer_card4_text: 'Giảm lượng phân bón còn sót lại trong xe, trong bin – giúp giảm hao hụt, giảm nguy cơ phân bị ẩm hoặc biến chất do nằm lâu.',

            apps_fertilizer_benefits_title: 'Lợi ích + ưu điểm khi dùng cho phân bón',
            apps_fertilizer_th_benefit: 'Lợi ích',
            apps_fertilizer_th_explain: 'Giải thích liên quan phân bón',

            apps_fertilizer_b1_title: 'Giảm tổn thất vật liệu',
            apps_fertilizer_b1_text: 'Phân bón thường nhỏ hạt, có bụi, dễ bị thất thoát khi xả thủ công. Walking Floor giúp xả sạch hơn, giảm phần "chết" còn lại trong xe/bin.',

            apps_fertilizer_b2_title: 'Tăng an toàn & vệ sinh',
            apps_fertilizer_b2_text: 'Ít bụi, ít tiếp xúc với phân bón (nhân công), phân bón không phải bị đổ bằng cách nghiêng hoặc xúc bằng tay – giảm rủi ro hít bụi, tiếp xúc hóa chất nếu có.',

            apps_fertilizer_b3_title: 'Ổn định chất lượng',
            apps_fertilizer_b3_text: 'Phân bón nếu để lâu trong xe/bin có thể bị ảnh hưởng bởi nhiệt độ, độ ẩm; việc xả nhanh & giữ phân bón luôn trong điều kiện tốt giúp chất lượng được bảo vệ.',

            apps_fertilizer_b4_title: 'Linh hoạt & thuận tiện vận hành',
            apps_fertilizer_b4_text: 'Có thể đặt bin / nơi chứa phân bón gần nơi sử dụng, không cần diện tích lớn để xe đổ nghiêng; đặc biệt hữu ích trong nhà máy phân bón hoặc trang trại có không gian hạn chế.',

            apps_fertilizer_b5_title: 'Tối ưu chi phí lao động & thời gian',
            apps_fertilizer_b5_text: 'Giảm công nhân xúc/trộn/di chuyển phân bón, giảm thời gian xe dừng chờ xả; tổng chi phí vận hành có thể thấp hơn.',

            apps_fertilizer_notes_title: 'Những điểm cần lưu ý / thách thức khi áp dụng phân bón',
            apps_fertilizer_notes_detail1: 'Đa dạng loại phân bón: Hạt lớn, hạt nhỏ, phân hữu cơ ẩm, phân hóa học khô... mỗi loại có đặc tính khác (trọng lượng riêng, độ ẩm, độ dính, bụi). Cần chọn loại slats / sàn phù hợp, có lớp phủ chống mài mòn / dễ vệ sinh.',
            apps_fertilizer_notes_detail2: 'Độ ẩm cao: Nếu phân bón có độ ẩm cao sẽ dễ bám, dính vào sàn, khả năng gây tắc hoặc giảm hiệu suất xả. Có thể cần thiết kế nghiêng nhẹ hoặc có hệ thống rung, cọ, phun nước để hỗ trợ làm sạch.',
            apps_fertilizer_notes_detail3: 'Vấn đề bụi: Phân hóa học khô có thể rất bụi; cần biện pháp kiểm soát bụi (che chắn, hút bụi) để đảm bảo an toàn lao động, không phát tán bụi ra môi trường.',
            apps_fertilizer_notes_detail4: 'Vệ sinh & ngăn lẫn: Nếu dùng cùng sàn để xử lý nhiều loại vật liệu khác nhau, có nguy cơ lẫn tạp chất (ví dụ vật liệu còn sót lại từ vật liệu trước đó). Cần thiết kế vệ sinh dễ dàng, rửa sạch nếu cần.',

            apps_fertilizer_video_title: 'Video minh họa ứng dụng phân bón',
            apps_fertilizer_video_caption: 'Ứng dụng Walking Floor trong xử lý phân bón' ,
            prod_download_btn : 'Tải xuống PDF',
            
            // Floor slats section
            prod_slats_title: 'THANH SÀN KEITH® WALKING FLOOR®',
            prod_slats_intro_title: '1. Giới thiệu sản phẩm',
            prod_slats_role_title: '2. Vai trò quan trọng trong hệ thống',
            prod_slats_specs_title: 'Thông số kỹ thuật chi tiết - THANH SÀN KEITH®',
            prod_slats_features_title: 'Đặc điểm nổi bật & Lợi ích',
            prod_slats_feat_card_title: 'Đặc điểm nổi bật',
            prod_slats_benefit_card_title: 'Lợi ích cho doanh nghiệp',
            prod_slats_video_title: 'Video minh họa thanh sàn KEITH® WALKING FLOOR®',
            prod_slats_intro_p1: 'Thanh sàn (floor slat) là <span class="kw">bề mặt chuyển động chủ đạo</span> trong toàn bộ hệ thống KEITH® WALKING FLOOR®. Đây chính là phần sàn trực tiếp chịu tải và thực hiện động tác <span class="kw">"bước đi" tuần tự</span> để xả hoặc nạp hàng hóa hoàn toàn tự động, không cần nâng ben.',
            prod_slats_intro_p2: 'Nhờ công nghệ tiên phong của KEITH® Manufacturing Co., thanh sàn không chỉ đảm bảo <span class="kw">độ bền vượt trội</span>, mà còn đóng vai trò truyền lực chính, đưa hiệu suất vận tải của doanh nghiệp lên tầm cao mới.',
            prod_slats_role_li1: '<span class="kw">Tiếp xúc trực tiếp với hàng hóa</span>: Chịu toàn bộ tải trọng và ma sát của vật liệu từ rác thải, dăm gỗ, nông sản đến phế liệu công nghiệp nặng.',
            prod_slats_role_li2: '<span class="kw">Truyền động "Walking Floor"</span>: Phối hợp nhịp nhàng với hệ thống truyền động thủy lực (Running Floor II, S-Drive) – các nhóm thanh sàn di chuyển luân phiên, tạo chuyển động "đi bộ" đẩy hàng ra ngoài.',
            prod_slats_role_li3: '<span class="kw">Đảm bảo an toàn & hiệu suất</span>: Cho phép xả hàng nhanh trong kho trần thấp, loại bỏ rủi ro lật xe do nâng ben.',
            prod_slats_image_caption: 'Các loại thanh sàn KEITH® WALKING FLOOR®',
            prod_slats_specs_subtitle: '(Theo keithwalkingfloor.com/slats-profiles)</em>',
            prod_slats_specs_col_item: 'Hạng mục',
            prod_slats_specs_col_detail: 'Chi tiết',
            prod_slats_specs_col_note: 'Ghi chú',
            
            // Floor slats specifications table
            prod_slats_material: 'Vật liệu',
            prod_slats_material_value: 'Hợp kim nhôm chịu lực cao hoặc thép không gỉ',
            prod_slats_material_note: 'Tùy ứng dụng cụ thể',
            prod_slats_thickness: 'Độ dày thanh sàn',
            prod_slats_thickness_value: '~5 – 8 mm',
            prod_slats_thickness_note: 'Tùy dòng sản phẩm',
            prod_slats_length: 'Chiều dài',
            prod_slats_length_value: 'Tùy theo chiều dài rơ-moóc/container',
            prod_slats_length_note: 'Cắt theo kích thước yêu cầu',
            prod_slats_profiles: 'Kiểu dáng (Profiles)',
            prod_slats_profiles_value: '- Standard: dạng phẳng, đa dụng<br>- Leak-Resistant: có gioăng/gờ, chống rò rỉ<br>- Heavy-Duty: bản dày, chịu tải cực nặng',
            prod_slats_profiles_note: 'Phù hợp từ nông sản nhẹ đến phế liệu nặng',
            prod_slats_surface: 'Xử lý bề mặt',
            prod_slats_surface_value: 'Anodize hoặc sơn tĩnh điện',
            prod_slats_surface_note: 'Chống mài mòn & oxy hóa',
            prod_slats_load: 'Tải trọng làm việc',
            prod_slats_load_value: 'Lên tới hàng chục tấn/m²',
            prod_slats_load_note: 'Thiết kế đồng bộ với áp suất hệ thống 2.800–3.000 PSI',
            prod_slats_maintenance: 'Bảo trì',
            prod_slats_maintenance_value: 'Tháo rời và thay thế độc lập',
            prod_slats_maintenance_note: 'Không cần tháo toàn bộ sàn',
            
            // Floor slats features and benefits
            prod_slats_feat_li1: '<span class="kw">Đa dạng cấu hình</span>: nhiều profile khác nhau, phù hợp từ nông sản nhẹ đến phế liệu nặng.',
            prod_slats_feat_li2: '<span class="kw">Chống mài mòn – chống ăn mòn</span>: lớp anodize bảo vệ, vận hành bền bỉ trong môi trường ẩm ướt hoặc chứa hóa chất nhẹ.',
            prod_slats_feat_li3: '<span class="kw">Thiết kế module thông minh</span>: dễ tháo lắp từng thanh, tiết kiệm chi phí bảo dưỡng và giảm thời gian dừng xe.',
            prod_slats_feat_li4: '<span class="kw">Hiệu suất cao</span>: phối hợp hoàn hảo với hệ truyền động KEITH®, xả hàng nhanh – an toàn – ổn định.',
            prod_slats_benefit_li1: 'Tối ưu thời gian quay vòng xe, giảm chi phí vận hành.',
            prod_slats_benefit_li2: 'Tăng tuổi thọ phương tiện, bảo vệ kết cấu rơ-moóc và hàng hóa.',
            prod_slats_benefit_li3: 'Giảm thiểu rủi ro tai nạn lao động do không cần nâng ben.',
            prod_slats_benefit_li4: 'Nâng cao hình ảnh chuyên nghiệp và lợi thế cạnh tranh.',
            prod_slats_video_caption: 'Thanh sàn KEITH® WALKING FLOOR®',
            
            // Coordination section
            prod_coord_title : 'Sự phối hợp giữa Thanh sàn KEITH® WALKING FLOOR® và hệ truyền động KEITH®',
            prod_coord_struct_title : '1. Cấu trúc "đồng bộ" giữa sàn và truyền động' ,
            prod_coord_steps_title: '2. Nguyên lý phối hợp "3 bước"',
            prod_coord_step1 : 'Bước 1',
            prod_coord_step2 : 'Bước 2',
            prod_coord_step3 : 'Bước 3',
            prod_coord_drive_title: '3. Vai trò của hệ truyền động KEITH®',
            prod_coord_benefits_title : '4. Lợi ích của sự phối hợp hoàn hảo',
            prod_coord_summary_title : 'Tóm lại',
            prod_coord_subtitle: '(Theo tài liệu kỹ thuật chính thức của KEITH® Manufacturing Co.: keithwalkingfloor.com/slats-profiles và keithwalkingfloor.com/download/keith-running-floor-ii-dx-owners-manual)',
            prod_coord_struct_li1: 'Thanh sàn (floor slats) được gắn chặt vào cross-drives (thanh dẫn động ngang).',
            prod_coord_struct_li2: 'Các cross-drives kết nối trực tiếp với xilanh thủy lực của bộ truyền động (ví dụ: Running Floor II hoặc S-Drive).',
            prod_coord_struct_li3: 'Khi xilanh chuyển động theo chu kỳ, cross-drives kéo hoặc đẩy các nhóm thanh sàn, tạo thành chuyển động <span class="kw">"đi bộ" tuần tự</span>.',
            prod_coord_struct_summary: '→ Đây là thiết kế nguyên bản của KEITH®: mỗi chi tiết (thanh sàn, cross-drives, xilanh, van điều khiển) được thiết kế ăn khớp, đảm bảo <span class="kw">lực truyền đều và chính xác</span>.',
            prod_coord_steps_intro: 'Theo KEITH® Running Floor II Owner\'s Manual, quá trình xả hàng diễn ra theo chu trình ba bước:',
            prod_coord_step1_desc: '<strong>Giai đoạn đẩy nhóm 1 & 2</strong><br>Hai nhóm thanh sàn di chuyển đồng thời về phía sau, nhóm còn lại cố định → lực ma sát giữa hàng và nhóm di chuyển đẩy vật liệu về cửa xả.',
            prod_coord_step2_desc: '<strong>Giai đoạn nhóm 1 giữ – nhóm 2 & 3 kéo về trước</strong><br>Nhóm vừa đẩy xong được giữ lại, nhóm còn lại trượt về vị trí đầu.',
            prod_coord_step3_desc: '<strong>Giai đoạn nhóm 2 giữ – nhóm 1 & 3 kéo về trước</strong><br>Tiếp tục "bước" cho đến khi toàn bộ hàng được đẩy ra ngoài.',
            prod_coord_steps_summary: '→ Từng nhóm thanh sàn và xilanh hoạt động theo nhịp đã tính toán, <span class="kw">đồng bộ tuyệt đối</span> để duy trì dòng chảy vật liệu liên tục.',
            prod_coord_drive_li1: '<span class="kw">Nguồn lực</span>: Bộ truyền động (Running Floor II / S-Drive) cung cấp áp suất 2.800–3.000 PSI, lưu lượng 40–60 gal/phút để đảm bảo tốc độ sàn 2,5–5 m/phút.',
            prod_coord_drive_li2: '<span class="kw">Điều khiển & an toàn</span>: Van điều khiển (control valve), van cầu (ball valve) và van relief đảm bảo áp suất ổn định, chống sốc áp lực.',
            prod_coord_drive_li3: '<span class="kw">Bảo vệ tuổi thọ</span>: Kết hợp chính xác giúp thanh sàn không bị cong vênh hay mài mòn cục bộ.',
            prod_coord_benefits_li1: '<span class="kw">Hiệu suất xả hàng cao</span>: Sàn di chuyển liên tục, đồng đều → giảm thời gian dỡ hàng, tăng số chuyến vận tải.',
            prod_coord_benefits_li2: '<span class="kw">An toàn tuyệt đối</span>: Không cần nâng ben, hạn chế rủi ro lật xe.',
            prod_coord_benefits_li3: '<span class="kw">Giảm chi phí bảo trì</span>: Mỗi bộ phận (slats, cross-drives, xilanh) được thiết kế để tháo lắp nhanh, dễ thay thế từng phần.',
            prod_coord_benefits_li4: '<span class="kw">Độ bền vượt trội</span>: Hệ truyền động và thanh sàn được thiết kế đồng bộ từ KEITH®, bảo đảm tuổi thọ dài hạn ngay cả trong môi trường rác thải, gỗ dăm hoặc phế liệu nặng.',
            prod_coord_summary_desc: 'Thanh sàn KEITH® và hệ truyền động KEITH® không chỉ đơn thuần "tương thích" mà được thiết kế như một thể thống nhất. Chính sự đồng bộ này giúp hệ thống WALKING FLOOR® vận hành trơn tru, an toàn và bền bỉ, giữ vị thế dẫn đầu trong công nghệ xả hàng tự động trên toàn cầu.',
            prod_system_video_title: 'Video minh họa hệ thống hoạt động',
            prod_system_video_caption: 'Video: Giải thích cách hệ thống sàn trượt hoạt động: chu kỳ chuyển động của thanh sàn, drive thủy lực, cách xả hàng.',
            
            // Citations section
            prod_sources_title: 'Nguồn thông tin chính',
            prod_source1: 'Theo Manual chủ sở hữu KEITH® Running Floor II DX/DXE của Ferguson Farms – tài liệu "Owner / Operator Manual – RUNNING FLOOR II® DX / DXE"',
            prod_source1_company: 'Ferguson Farms, Inc.',
            prod_source2: 'Theo Manual "KEITH® Running Floor II DX Owners Manual" của Titan Trailers',
            prod_source2_company: 'Titan Trailers Inc.',
            prod_source3: 'Theo Trang chủ KEITH® Walking Floor – mục Downloads / Owner\'s Manual',
            prod_source3_company: 'Keith Walking Floor',
            prod_source4: 'Theo Manualslib — bản phép "Keith Running Floor II DX Manuals"',
            prod_source4_company: 'ManualsLib',
            prod_source5: '(Theo tài liệu chính thức "KEITH® S-Drive Owner / Operator Manual – DOC06302 Rev H" trên',
            prod_source5_link: 'keithwalkingfloor.com',
            
            // News page
            news_hero_title: 'Tin Tức',
            news_hero_subtitle: 'Cập nhật tin tức mới nhất',
            news_construction_title: 'Đang phát triển và nâng cấp website',
            news_construction_desc: 'Nội dung sẽ sớm được cập nhật. Cảm ơn bạn đã ghé thăm!',
            
            // Partnership content (Vietnamese)
            news_partnership_title: 'Như Tín Corporation – Hợp tác cùng phát triển',
            news_partnership_intro: 'Công ty Cổ phần Như Tín, đơn vị phân phối chính thức hệ thống KEITH® WALKING FLOOR® tại Việt Nam, luôn mong muốn mở rộng mạng lưới hợp tác.',
            news_partnership_invite: 'Chúng tôi trân trọng mời gọi:',
            news_partnership_installers: 'Các đơn vị lắp đặt thiết bị',
            news_partnership_installers_desc: 'có kinh nghiệm',
            news_partnership_dealers: 'Các đại lý phân phối',
            news_partnership_dealers_desc: 'uy tín và tâm huyết',
            news_partnership_commitment: 'Như Tín cam kết đồng hành cùng đối tác',
            news_partnership_sincere: 'Chân thành',
            news_partnership_transparent: 'Minh bạch',
            news_partnership_sustainable: 'Bền vững',
            news_partnership_solution: 'mang đến giải pháp dỡ hàng hiện đại, an toàn và hiệu quả nhất.',
            news_partnership_contact_title: 'Liên hệ ngay',
            news_partnership_contact_desc: 'Mọi chi tiết xin liên hệ trực tiếp với chúng tôi qua số điện thoại:',
            
            // Downloads page
            downloads_hero_title: 'DOWNLOADS',
            downloads_rf2_title: 'RUNNING FLOOR II – Tài liệu',
            downloads_kmd_title: 'KMD – Tài liệu',
            downloads_sdrive_title: 'S-Drive – Tài liệu',
            downloads_table_title: 'Title',
            downloads_table_date: 'Update Date',
            downloads_table_download: 'Download',
            downloads_btn_preview: 'Preview',
            downloads_btn_download: 'Download',
            downloads_file_count: 'file(s)',
            downloads_preview_note: 'Nhấn "Preview" để mở tài liệu trên trình duyệt trước khi tải.',
            
            // About Keith page
            aboutkeith_hero_title: 'Khách hàng truyền cảm hứng <br>Đổi mới tạo giá trị',
            aboutkeith_hero_subtitle: 'KEITH® Walking Floor® Việt Nam',
            aboutkeith_history_title: 'Người dẫn đầu trong lĩnh vực xử lý vật liệu hơn 70 năm',
            aboutkeith_history_p1: 'Nguồn gốc của hệ thống dỡ hàng <span class="kw">WALKING FLOOR®</span> bắt đầu từ năm 1950, khi nhà sáng lập <span class="kw">Keith Foster</span> — "Keith" trong KEITH® — phát triển thiết bị bốc dỡ vật liệu cho ngành nông nghiệp. Đầu những năm 1970, ông thành lập <span class="kw">KEITH® Manufacturing</span> tại Madras, Oregon, với mục tiêu tạo ra hệ thống dỡ hàng <span class="kw">bền bỉ, đáng tin cậy và hiệu quả nhất</span>. Hệ thống <span class="kw">KEITH® WALKING FLOOR®</span> nhanh chóng trở thành tiêu chuẩn của ngành trong công nghệ sàn trượt.',
            aboutkeith_history_p2: 'Ngày nay, công ty được điều hành bởi <span class="kw">thế hệ thứ hai và thứ ba</span> của gia đình Foster, luôn cam kết mang lại <span class="kw">thành công cho khách hàng</span>.',
            aboutkeith_global_title: 'Hỗ trợ khách hàng toàn cầu',
            aboutkeith_global_p1: 'Thương hiệu <span class="kw">WALKING FLOOR®</span> được biết đến trên toàn thế giới để chỉ các sản phẩm <span class="kw">tự động dỡ hàng</span>, được thiết kế và sản xuất <span class="kw">độc quyền bởi KEITH®</span>. Công ty đã cung cấp hơn <span class="kw">90.000 hệ thống</span> và nắm giữ hơn <span class="kw">270 bằng sáng chế</span>.',
            aboutkeith_global_p2: 'Các hệ thống của KEITH® được ứng dụng trong nhiều <span class="kw">ngành công nghiệp trên toàn cầu</span> để xử lý vật liệu rời. <span class="kw">KEITH® Manufacturing</span> hiện có mặt tại <span class="kw">5 quốc gia</span> và sở hữu <span class="kw">mạng lưới đại lý rộng khắp</span>, sẵn sàng phục vụ khách hàng ở bất cứ đâu.',
            aboutkeith_gallery_title: 'Bên dưới là một số hình ảnh của công ty.',
            aboutkeith_image_source: 'Nguồn ảnh từ',
            
            // About Nhu Tin page
            aboutnhutin_hero_title: 'CÔNG TY CỔ PHẦN NHƯ TÍN',
            aboutnhutin_hero_subtitle: 'Đối tác KEITH® WALKING FLOOR® tại Việt Nam',
            aboutnhutin_main_title: 'GIỚI THIỆU CÔNG TY CỔ PHẦN NHƯ TÍN',
            aboutnhutin_p1: 'Công ty Cổ phần <span class="kw">Như Tín</span> được thành lập vào tháng 01 năm 2010. Chúng tôi luôn nỗ lực tạo dựng mối quan hệ hợp tác tốt đẹp với các đối tác và không ngừng phát triển hoạt động kinh doanh trên cơ sở mang lại lợi ích song phương.',
            aboutnhutin_p2: 'Chúng tôi chuyên cung cấp <span class="kw">chất đốt sinh khối bã điều</span> (bã vỏ hạt điều sau ép dầu).',
            aboutnhutin_p3: 'Là đơn vị tiên phong ứng dụng chất đốt bã điều cho <span class="kw">lò hơi công nghiệp</span> với hàng chục năm kinh nghiệm, chúng tôi tự tin mang đến giải pháp sử dụng hiệu quả chất đốt bã điều và các chất đốt sinh khối khác, bao gồm:',
            aboutnhutin_li1: 'Cung cấp <span class="kw">thiết bị cải tiến lò hơi</span> để đốt bã điều.',
            aboutnhutin_li2: 'Tư vấn sử dụng bã điều hiệu quả nhằm <span class="kw">tiết kiệm chi phí sản xuất lên tới 50%</span> so với khi chỉ đốt than.',
            aboutnhutin_li3: 'Tư vấn vận hành an toàn, <span class="kw">không ảnh hưởng tuổi thọ thiết bị</span>.',
            aboutnhutin_li4: 'Tư vấn <span class="kw">xử lý khói thải</span> không gây ảnh hưởng môi trường xung quanh.',
            aboutnhutin_p4: 'Từ năm 2018, Như Tín tiên phong đầu tư và đưa vào sử dụng <span class="kw">công nghệ xuống hàng tự động (tự đổ)</span> cho xe tải thùng, xe đầu kéo container từ Mỹ.',
            aboutnhutin_p5: 'Sau quá trình sàng lọc và ứng dụng thực tế, Như Tín hiện là <span class="kw">đối tác duy nhất của Keith Walking Floor (USA)</span> để phân phối và lắp đặt hệ thống <span class="kw">xếp dỡ hàng hóa tự động</span> cho xe tải, container – chất lượng, hiệu quả và chi phí hợp lý tại Việt Nam.',
            aboutnhutin_p6: 'Hệ thống tinh gọn, linh hoạt, phù hợp đa dạng hàng hóa, <span class="kw">tải trọng từ 10 đến 80 tấn</span>, <span class="kw">độ bền cao</span>, gần như <span class="kw">không cần bảo trì</span>, vận hành đơn giản, lắp đặt nhanh chóng và dễ dàng tích hợp với phương tiện sẵn có của Quý khách.',
            aboutnhutin_p7: 'Với đội ngũ quản lý uy tín, trách nhiệm, linh động & hiệu quả, chúng tôi cam kết mang đến sản phẩm chất lượng với <span class="kw">giá cả cạnh tranh</span>, <span class="kw">tiến độ đảm bảo</span>, đáp ứng yêu cầu đa dạng của khách hàng.',
            aboutnhutin_p8: 'Với phương châm <span class="kw">uy tín và hợp tác bền vững</span>, Như Tín không ngừng hoàn thiện để mang lại <span class="kw">sự hài lòng</span> và <span class="kw">niềm tin</span> cho khách hàng.'
        },
        en: {
            nav_home: 'Home',
            nav_apps: 'Applications',
            nav_tagline: 'Authorized dealer/partner of KEITH® Mfg. Co. in Vietnam',
            apps_biomass: 'Biomass',
            apps_coal: 'Coal',
            apps_construction: 'Construction Materials',
            apps_fertilizer: 'Fertilizers',
            apps_waste: 'Waste',
            nav_products: 'Products',
            prod_running_floor_ii: 'Running Floor II',
            prod_kmd: 'KMD',
            prod_sdrive: 'S-Drive',
            prod_floor_boards: 'Floor slats',
            prod_system_integration: 'System integration',
            nav_news: 'News',
            nav_downloads: 'Documents & downloads',
            nav_about: 'About us',
            nav_keith: 'Keith',
            nav_nhutin: 'Nhu Tin',
            nav_website_nhutin: 'Nhu Tin website',
            footer_note: 'Authorized dealer/partner of KEITH® Mfg. Co. in Vietnam',
            footer_address: 'Address',
            footer_links: 'Links',
            footer_home: 'Home',
            footer_about_nhutin: 'Nhu Tin',
            footer_about_keith: 'KEITH®',
            footer_apps: 'Applications',
            footer_products: 'Products',
            footer_connect: 'Connect',
            footer_office_label: 'Office:',
            footer_factory_label: 'Factory:',
            footer_phone_label: 'Phone:',
            footer_email_label: 'Email:',
            home_contact_free: 'Free consultation contact',
            // Hero section
            hero_title: 'Smart Transportation Solutions',
            hero_subtitle: 'Authorized dealer/partner of KEITH® Mfg. Co. in Vietnam',
            hero_feature_1: 'Enduring through time',
            hero_feature_2: 'Convenient for every shipment',
            hero_feature_3: 'Efficient in all solutions',
            hero_feature_4: 'Your trusted partner',
            // About section
            about_how_it_works: 'How it Works',
            about_description: 'The KEITH® WALKING FLOOR® hydraulic sliding floor system operates using a series of floor slats to safely and efficiently "push" materials out.',
            about_advantages_title: 'Outstanding Advantages',
            about_advantage_1: '4 times more efficient than conventional transportation methods.',
            about_advantage_2: 'Investment cost is only 1/5 of vehicle value, with virtually no additional operating costs.',
            about_advantage_3: 'No need to purchase additional vehicles, hire more drivers or loading/unloading workers.',
            about_advantage_4: 'Safe operation even in limited dock, warehouse conditions.',
            about_applications_title: 'Flexible Applications',
            about_app_1: 'Agricultural products: corn, potatoes, cassava, cashew shells.',
            about_app_2: 'Biomass: wood chips, sawdust, rice husks.',
            about_app_3: 'Fuel: coal.',
            about_app_4: 'Livestock feed.',
            about_app_5: 'Construction materials.',
            about_app_6: 'Waste, scrap materials.',
            about_global_tech_title: 'Global Technology',
            about_global_tech_1: 'Invented and improved for over 70 years by Keith Manufacturing (USA), manufactured at 5 factories in the US & Europe, widely applied in Europe and America.',
            about_global_tech_2: 'In Vietnam, we have pioneered the successful deployment of this technology for over 8 years, bringing practical benefits to vehicle owners and social benefits.',
            // Features section
            features_why_choose: 'Why Choose',
            feature_1_title: 'Superior Efficiency',
            feature_1_desc: 'Increases transportation productivity 4 times compared to traditional methods.',
            feature_2_title: 'Cost Savings',
            feature_2_desc: 'Low initial investment, virtually no additional operating costs.',
            feature_3_title: 'Safe & Reliable',
            feature_3_desc: 'Stable operation in all dock and warehouse conditions.',
            feature_4_title: 'Flexible Applications',
            feature_4_desc: 'Suitable for various cargo types: agricultural products, biomass, fuel, construction materials, waste...',
            feature_5_title: 'Global Technology',
            feature_5_desc: 'Solutions from the US & Europe, widely applied in over 60 countries.',
            feature_6_title: 'Pioneer in Vietnam',
            feature_6_desc: 'Over 8 years of successful deployment, trusted by many enterprises.',
            // Company section
            company_who_title: 'Who Are We?',
            company_who_desc_1: 'Nhu Tin Corporation has been operating in the bulk transportation sector since 2010. We understand the difficulties in loading and unloading cargo from vehicles to factory warehouses.',
            company_who_desc_2: 'Through many years of deployment, we pioneered investing in automatic cargo handling systems using KEITH® WALKING FLOOR® sliding floors. The solution helps customers increase productivity, safety and operational efficiency.',
            company_see_more: 'See More',
            company_solution_title: 'Our Solutions?',
            company_solution_desc_1: 'We focus on automating the loading and unloading of bulk cargo using KEITH® WALKING FLOOR®, helping to shorten vehicle downtime and optimize operating costs.',
            company_solution_desc_2: 'The solution has been proven at many enterprises: safe, reducing labor, increasing profits through automatic unloading processes for trucks, box trucks, trailers, containers.',
            // Mission section
            mission_title: 'OUR MISSIONS',
            mission_service_1_title: 'Efficiency',
            mission_service_1_desc: 'Help vehicle owners increase transportation productivity many times over compared to traditional methods.',
            mission_service_2_title: 'Savings',
            mission_service_2_desc: 'Reduce investment, operating and labor costs, bringing sustainable economic benefits.',
            mission_service_3_title: 'Safety',
            mission_service_3_desc: 'Ensure loading and transportation processes operate stably in all conditions.',
            mission_service_4_title: 'Sustainability',
            mission_service_4_desc: 'Towards environmentally friendly transportation solutions, contributing to social benefits.',
            // FAQ section
            faq_title: 'Frequently Asked Questions',
            faq_subtitle: 'Common questions about KEITH® WALKING FLOOR® self-unloading floor systems',
            faq_q1: '1. What is KEITH® WALKING FLOOR® and how does it work?',
            faq_a1: 'KEITH® WALKING FLOOR® is a unique material handling system that uses a series of reciprocating slats to move bulk materials in and out of vehicles or stationary systems. It is designed for efficient, safe and automatic loading and unloading processes.',
            faq_q2: '2. Why should I choose KEITH® WALKING FLOOR®?',
            faq_a2: 'Keith Manufacturing Co. specializes in custom solutions tailored to your specific material handling needs, ensuring the system fits perfectly with your specifications. Their systems are renowned for reliability and efficiency.',
            faq_q3: '3. Is KEITH® WALKING FLOOR® a reliable system?',
            faq_a3: 'Yes, KEITH® WALKING FLOOR® systems are highly reliable. They are designed to ensure durability and long life, with always available support for troubleshooting and maintenance.',
            faq_q4: '4. Can KEITH® WALKING FLOOR® be customized to my needs?',
            faq_a4: 'Absolutely. Keith specializes in designing custom solutions tailored to your specific material handling requirements, ensuring the system is perfectly adjusted to your needs.',
            faq_q5: '5. What types of materials can KEITH® WALKING FLOOR® handle?',
            faq_a5: 'KEITH® WALKING FLOOR® is very flexible and can handle many types of materials, including bulk cargo, recyclables, agricultural products, etc., making them suitable for various industries.',
            faq_q6: '6. How does KEITH® WALKING FLOOR® improve driver safety?',
            faq_a6: 'The system allows automatic loading and unloading, helping drivers stay away from behind the trailer and reducing the risk of injury related to manual handling.',
            faq_q7: '7. Are there any training or support options for KEITH® WALKING FLOOR®?',
            faq_a7: 'Keith provides comprehensive support, ensuring your team can operate the system efficiently and safely.',
            faq_q8: '8. How available are parts and services for KEITH® WALKING FLOOR®?',
            faq_a8: 'With over 100 dealers worldwide, finding parts and services for Keith walking floor systems is easy, ensuring minimal downtime and consistent operational efficiency.',
            faq_q9: '9. What makes Keith walking floor systems a better investment than other brands?',
            faq_a9: 'Keith focuses on custom-designed solutions, combined with a reputation for durability, efficiency and excellent support, ensuring high return on investment by optimizing your operations and minimizing maintenance costs.',
            faq_q10: '10. Where can I find more information or contact Keith Manufacturing Co.?',
            faq_a10: 'You can visit the website keithwalkingfloor.vn or call hotline: 090.791.7301 for more information.',
            // Newsletter section
            newsletter_title: 'Contact us now!',
            newsletter_subtitle: 'Reputation – Experience – Dedication',
            newsletter_cta: 'MESSAGE US ON ZALO',
            // ungdung.html - Hero
            apps_hero_title: 'Application Fields',
            apps_hero_subtitle: 'KEITH® Walking Floor® Vietnam',
            // ungdung.html - Solution section
            apps_solution_title: 'Keith® Walking Floor® VN – Automatic sliding floors for trucks, containers and trailers',
            apps_solution_p1: 'Looking for a fast, safe and cost-effective loading/unloading solution? The Keith® Walking Floor® automatic sliding floor technology is the optimal choice. The system uses sequential floor slats to load and unload without forklifts or loaders, making transport simpler and more efficient than ever.',
            apps_solution_p2: 'With load capacity from 10 to 80 tons, Walking Floor® suits many cargo types: agricultural products, fertilizers, plastic pellets, coal, recyclable waste, bagged goods and pallets. It can save up to 70% unloading time, reduce labor cost and minimize cargo damage risks.',
            apps_solution_p3: 'Durable and easy to maintain, the system can integrate remote control, safety sensors and smart monitoring, offering complete peace of mind. It is a modern solution chosen by many transport and warehousing businesses in Vietnam to boost productivity and competitiveness.',
            apps_solution_cta_strong: '👉 Contact 0907917301 now',
            apps_solution_cta_tail: 'to get detailed consultation on Keith® Walking Floor® Vietnam and the best-fit automatic handling solution for your business.',
            apps_solution_video1_caption: 'Truck body with sliding floor for sawdust',
            apps_solution_video2_caption: '40ft container with sliding floor for wood chips',
            apps_section_lead: 'Below are some representative real-world vehicles put into operation by our customers.',
            apps_section_item1: '12m cage trailer unloading paper mill waste',
            apps_section_item2: 'Truck body with sliding floor for rice husk pellets',
            apps_section_item3: 'Truck body with sliding floor for cashew residue pellets',
            apps_section_item4: '40ft container with sliding floor for biomass (cashew residue)',
            // ungdung.html - Biomass
            apps_biomass_title: 'Applications in Biomass',
            apps_biomass_intro: 'Biomass includes loose materials like wood chips, sawdust, rice husks, agro-forestry residues, biomass pellets, etc. Walking Floor applications in Biomass include:',
            apps_biomass_card1_title: 'Receiving materials',
            apps_biomass_card1_text: 'Receive materials from trailers or trucks without complex tipping or lifting.',
            apps_biomass_card2_title: 'Temporary storage',
            apps_biomass_card2_text: 'Store biomass before processing/burning/grinding. Fixed bins can hold large volumes and feed evenly as needed.',
            apps_biomass_card3_title: 'Feeding / metering',
            apps_biomass_card3_text: 'Move biomass from storage to processing with adjustable, stable speed, avoiding clogs or stoppages.',
            apps_biomass_card4_title: 'Discharge / unloading',
            apps_biomass_card4_text: 'Push biomass out of vehicles or bins to the next system without much labor, no tilting.',
            apps_biomass_benefits_title: 'Benefits for Biomass',
            apps_table_th_benefit: 'Benefit',
            apps_table_th_explain: 'Explanation',
            apps_biomass_b1_title: 'Higher throughput / reduced processing time',
            apps_biomass_b1_text: 'Automated, fast and even receiving, unloading and feeding — reducing vehicle downtime and warehouse waiting versus manual/tipping.',
            apps_biomass_b2_title: 'Lower labor cost & safety risks',
            apps_biomass_b2_text: 'Less manual handling, lower accident risk, less fatigue; reduced risks from dust, slips and falling material.',
            apps_biomass_b3_title: 'Operate in constrained spaces',
            apps_biomass_b3_text: 'No tipping or high roof needed; can enter low-roof warehouses; easier layout with terrain constraints.',
            apps_biomass_b4_title: 'Stable flow & low maintenance cost',
            apps_biomass_b4_text: 'Hydraulic drive + slats built for wear; even flow reduces clogging.',
            apps_biomass_b5_title: 'Lower total cost of ownership',
            apps_biomass_b5_text: 'Though initial investment may be higher, lower labor and downtime reduce long-term cost.',
            apps_biomass_b6_title: 'Flexible & customizable',
            apps_biomass_b6_text: 'Custom bins, slat count, floor materials, jet size, speed and bin types for each biomass and scale.',
            apps_biomass_b7_title: 'Reduced waste and loss',
            apps_biomass_b7_text: 'Floors can slide almost all material out, minimizing leftovers in bins/vehicles.',
            apps_biomass_videos_title: 'Biomass application videos',
            apps_coal_title2: 'Applications in the coal industry',
            apps_coal_card1_title: 'Receiving coal from trucks / rail wagons',
            apps_coal_card1_text: 'When coal is transported to power plants or processing plants, it can be unloaded into storage bins using Walking Floor instead of dump trucks.',

            apps_coal_card2_title: 'Temporary storage and distribution',
            apps_coal_card2_text: 'Coal storage facilities and transfer warehouses use Walking Floor to feed coal into conveyors, furnaces, and crushers with consistent flow.',

            apps_coal_card3_title: 'Coal unloading / discharge',
            apps_coal_card3_text: 'When unloading coal from containers, trucks, or wagons, Walking Floor ensures clean discharge and minimizes leftover coal.',

            apps_coal_card4_title: 'Coal feeding (metering / feeding)',
            apps_coal_card4_text: 'Deliver coal into furnaces, combustion chambers, or crushers — controlling input flow to stabilize burning or grinding and optimize efficiency.',

            apps_coal_card5_title: 'Reduce dust & pollution',
            apps_coal_card5_text: 'With Walking Floor transportation and unloading, less dust is generated compared to tipping trucks or unloading from height.',

            apps_coal_benefits_title: 'Benefits of using Keith Walking Floor for coal',

            apps_coal_th_benefit: 'Benefit',
            apps_coal_th_explain: 'Coal-specific explanation',

            apps_coal_b1_title: 'Stable & consistent operation',
            apps_coal_b1_text: 'Coal is heavy and varies in size; Walking Floor ensures smooth feeding, avoiding sudden surges and keeping furnaces or crushers stable.',

            apps_coal_b2_title: 'Reduced coal loss & eliminated blockages',
            apps_coal_b2_text: 'Coal tends to clump and stick; with conventional unloading, much coal remains inside. Walking Floor pushes almost all coal out, reducing leftover deposits.',

            apps_coal_b3_title: 'Safety & fewer incidents',
            apps_coal_b3_text: 'Minimizes manual handling risks, reduces coal spillage and dust — lowering explosion hazards and respiratory risks for workers.',

            apps_coal_b4_title: 'Lower long-term operating costs',
            apps_coal_b4_text: 'Requires fewer workers, less auxiliary equipment (dump trucks, loaders), and less equipment damage from lifting or tipping operations.',

            apps_coal_b5_title: 'Adaptable to limited infrastructure',
            apps_coal_b5_text: 'Suitable for facilities with low ceilings, restricted tipping space, or where inclined conveyors are impractical.',

            apps_coal_b6_title: 'Optimized thermal / fuel efficiency',
            apps_coal_b6_text: 'With consistent coal feeding, furnace temperature remains stable, combustion improves, and less extra coal is needed to balance irregular operation.',
            apps_construction_title2: 'Applications in construction materials',

            apps_construction_card1_title: 'Receiving construction materials',
            apps_construction_card1_text: 'Trucks carrying sand, gravel, crushed stone, bulk cement, additives, etc., can unload into warehouses or transfer bins; Walking Floor enables unloading without traditional tipping.',

            apps_construction_card2_title: 'Temporary storage',
            apps_construction_card2_text: 'Store construction materials in fixed bins, at construction sites or warehouses; used to stabilize supply when demand fluctuates.',

            apps_construction_card3_title: 'Feeding into production lines',
            apps_construction_card3_text: 'Concrete batching plants, mixers, stone crushers, cutting or pouring machines — all benefit from steady supply with adjustable flow rate.',

            apps_construction_card4_title: 'Unloading construction materials',
            apps_construction_card4_text: 'Gravel, crushed concrete, etc., can be discharged from trucks or containers with Walking Floor — no tipping required, faster unloading.',

            apps_construction_card5_title: 'Distribution / metering',
            apps_construction_card5_text: 'Can integrate flow measurement when feeding into mixers to ensure correct mix ratios and minimize errors.',

            apps_construction_benefits_title: 'Benefits of using for construction materials',

            apps_construction_th_benefit: 'Benefit',
            apps_construction_th_explain: 'Construction-specific explanation',

            apps_construction_b1_title: 'Higher speed & efficiency',
            apps_construction_b1_text: 'Fast, consistent loading and unloading reduces truck waiting time or manual labor — especially useful for large-scale projects requiring fast supply.',

            apps_construction_b2_title: 'Reduced loss & optimized material use',
            apps_construction_b2_text: 'Small materials like sand or fines are often wasted if left in trucks/bins; Walking Floor unloads nearly all, minimizing dead volume.',

            apps_construction_b3_title: 'Safety & reduced labor effort',
            apps_construction_b3_text: 'Less manual shoveling or digging; reduced dust during unloading — better for site environment and worker health.',

            apps_construction_b4_title: 'Flexibility in site layout',
            apps_construction_b4_text: 'If the site lacks space or terrain for truck tipping, or has low warehouse ceilings, Walking Floor offers easier installation.',

            apps_construction_b5_title: 'Improved consistency in batching / mixing concrete',
            apps_construction_b5_text: 'Steady supply ensures mixers operate smoothly, improving concrete quality (less air pockets, more uniform composition).',

            apps_construction_b6_title: 'Lower maintenance & operating costs',
            apps_construction_b6_text: 'Fewer auxiliary machines like loaders or forklifts, less wear compared to repeated pushing/shoveling; floors can be made abrasion-resistant for gravel and stone.',

            apps_construction_notes_title: 'Notes / limitations',
            apps_construction_notes_intro: 'For proper application, consider the following points:',

            apps_construction_note1: 'Wear: Materials like stone and gravel are highly abrasive; floors should use wear-resistant materials to increase durability.',
            apps_construction_note2: 'Weight: Bulk materials are heavy, ensure the system has suitable capacity for stable operation.',
            apps_construction_note3: 'Dust: Sand, cement, and fines create dust, so dust extraction systems are recommended to protect the work environment.',
            apps_construction_note4: 'Clumping / moisture: Some materials may clump or stick when wet — anti-stick design is needed.',

            // Waste section (English)
            apps_waste_title2: 'Applications in waste handling',
            apps_waste_card1_title: 'Receiving/unloading waste from trucks / containers / trailers',
            apps_waste_card1_text: 'Sliding floors unload waste from vehicles or bins without tipping.',
            apps_waste_card2_title: 'Waste storage & distribution',
            apps_waste_card2_text: 'Fixed bins or transfer stations feed waste evenly to sorting/processing lines.',
            apps_waste_card3_title: 'Metered waste feeding / flow measurement',
            apps_waste_card3_text: 'For sorters, shredders, composters, or subsequent treatment equipment.',
            apps_waste_card4_title: 'Internal transfer',
            apps_waste_card4_text: 'Move waste between areas in processing/recycling plants or from storage to incinerators/sorting.',
            apps_waste_card5_title: 'Handling mixed waste types',
            apps_waste_card5_text: 'MSW, C&D, food/organic waste, flat recyclables, and more.',
            apps_waste_benefits_title: 'Benefits for waste applications',
            apps_waste_th_benefit: 'Benefit',
            apps_waste_th_explain: 'Explanation',
            apps_waste_b1_title: 'Higher throughput, reduced unloading time',
            apps_waste_b1_text: 'Faster truck unloading without large tipping equipment; saves waiting time and labor.',
            apps_waste_b2_title: 'Reduced safety risks / accidents',
            apps_waste_b2_text: 'No tipping reduces rollover/slip/injury risks; less exposure to heavy/unstable materials.',
            apps_waste_b3_title: 'Operational and layout flexibility',
            apps_waste_b3_text: 'Works in tight spaces or where tipping is impossible; mobile or fixed systems; sliding-floor trailers serve transfer stations without tipping gear.',
            apps_waste_b4_title: 'Capable of handling diverse waste streams',
            apps_waste_b4_text: 'From light to heavy mixed waste: C&D, MSW, organics. Floor and configuration can be tailored per material.',
            apps_waste_b5_title: 'Lower long-term operating & maintenance costs',
            apps_waste_b5_text: 'Use abrasion-resistant steel floors (e.g., "J‑Max Steel Floor") for heavy waste, reducing damage and extending service intervals.',
            apps_waste_b6_title: 'Optimized use of space & auxiliary equipment',
            apps_waste_b6_text: 'No tipping systems needed; unloading indoors or under roofs is possible; uneven ground is less of a constraint.',
            apps_waste_b7_title: 'Dust and litter control',
            apps_waste_b7_text: 'Covers/tarps and controlled discharge reduce airborne litter; steady discharge helps contain spread.',
            apps_waste_notes_title: 'Key considerations / challenges',
            apps_waste_notes_detail1: 'Heavy abrasion: Mixed waste with hard, sharp contaminants (e.g., metal, glass, stone fragments) can cause severe floor wear; choose abrasion-resistant floors and appropriate slat materials.',
            apps_waste_notes_detail2: 'Wet/sticky organic/food waste: Can stick to floors, causing blockages or cleaning difficulties. Design for easy cleaning with wash/vibration/cleaning systems.',
            apps_waste_notes_detail3: 'Odor & environmental hygiene: Waste odors, decomposition, potential toxic gases/bacteria; need odor treatment and good hygiene measures.',
            apps_waste_notes_detail4: 'Dust/litter control: Need control measures during discharge/transport.',
            apps_waste_notes_detail5: 'Initial investment cost: Sealed systems, abrasion-resistant steel floors, specialized trailer equipment can be expensive; calculate long-term benefits.',
            apps_waste_video_title: 'Waste application demo video',
            
            // Product page - Hero
            prod_hero_title: 'Products',
            prod_hero_subtitle: 'KEITH® WALKING FLOOR® Product System',
            
            // Product page - Running Floor II
            prod_rfii_title: 'KEITH® RUNNING FLOOR II™',
            prod_rfii_role_title: 'Role in KEITH® Walking Floor System',
            prod_rfii_adv_title: 'Outstanding Advantages',
            prod_rfii_benefit_title: 'Business Benefits',
            prod_rfii_conclusion: 'KEITH® RUNNING FLOOR II™ – the standard drive solution, bringing power and reliability to the entire KEITH® walking floor system.',
            prod_rfii_p_intro: 'KEITH® RUNNING FLOOR II™ is a <span class="kw">next‑generation hydraulic drive</span>, serving as the "heart" of the KEITH® WALKING FLOOR® system – a <span class="kw">fully automatic unloading technology</span> trusted worldwide. It keeps the floor moving in harmony to ensure <span class="kw">safe, fast and continuous</span> unloading without tipping.',
            prod_rfii_role_li1: '<span class="kw">Central drive</span>: RUNNING FLOOR II™ provides synchronized hydraulic force to the floor slats, enabling the system to "step" sequentially and move material out.',
            prod_rfii_role_li2: '<span class="kw">Optimized performance</span>: Keeps the entire floor operating smoothly under heavy loads (35–75 tons), with unloading speeds up to 3.8 m/min without disrupting logistics.',
            prod_rfii_role_li3: '<span class="kw">Structure protection</span>: Corrosion-resistant design, hydraulic steel tubing and serviceable valves extend system life and reduce downtime.',
            prod_rfii_adv_li1: '<span class="kw">Automatic unloading – no trailer tipping</span>: Absolutely safe in low‑ceiling warehouses or height‑restricted areas.',
            prod_rfii_adv_li2: '<span class="kw">Wide range of applications</span>: From waste, agricultural products, wood chips to heavy industrial materials.',
            prod_rfii_adv_li3: '<span class="kw">Powerful hydraulics</span>: Six cylinders handling up to 3000 PSI, ensuring reliable operation in harsh conditions.',
            prod_rfii_adv_li4: '<span class="kw">Easy maintenance</span>: Modular architecture with external ball and control valves for quick inspection and replacement, reducing maintenance costs.',
            prod_rfii_benefit_li1: '<span class="kw">Higher transport productivity</span>: Faster unloading, shorter turnaround time.',
            prod_rfii_benefit_li2: '<span class="kw">Lower costs and risks</span>: Eliminates tipping, reduces rollover accidents, saves labor.',
            prod_rfii_benefit_li3: '<span class="kw">Greater service value</span>: Delivers a professional image and sustainable competitive advantage for businesses.',
            
            // KMD section (English)
            prod_kmd_intro: 'KMD 250/300 is a hydraulic drive unit – the "heart" of the KEITH® self-unloading walking floor system.',
            prod_kmd_role_li1: 'Creates linear motion for floor slats, pushing bulk cargo out without tipping.',
            prod_kmd_role_li2: 'Installed in trailers or truck bodies, enabling safe, fast loading/unloading of large cargo without auxiliary equipment.',
            prod_kmd_mechanism_title: 'Multi-cylinder hydraulic mechanism:',
            prod_kmd_mechanism_li1: 'Consists of 3 cylinder groups connected via cross-drives.',
            prod_kmd_mechanism_li2: 'Oil flows from PTO through check valve and switching valve.',
            prod_kmd_stages_title: '4-stage principle:',
            prod_kmd_stage1: 'Stage 1–3 (repositioning): Each time ~1/3 of floor slats slide under load, cargo doesn\'t move.',
            prod_kmd_stage2: 'Stage 4: All floor slats move simultaneously, pushing cargo toward discharge.',
            prod_kmd_cycle: 'Cycle repeats continuously until fully unloaded; when loading, reverse pressure and cylinder sequence in opposite direction.',
            prod_kmd_specs_li1: 'KMD 250: Ø2.5 in, load ~8 tons, speed 3–6.5 ft/min.',
            prod_kmd_specs_li2: 'KMD 300: Ø3.0 in, load ~16 tons, speed 2–4 ft/min.',
            prod_kmd_specs_li3: 'Pressure 2,800–3,000 PSI; max oil temperature 60°C; recommended pump 5–6 gal/min.',
            prod_kmd_specs_li4: 'Modular design: drive frame, cross-drives, rod clamps, switching valve… easy installation.',
            prod_kmd_table_feature: 'Feature',
            prod_kmd_table_250: 'KMD 250',
            prod_kmd_table_300: 'KMD 300',
            prod_kmd_cylinder_diameter: 'Cylinder diameter',
            prod_kmd_cylinder_stroke: 'Cylinder stroke',
            prod_kmd_safety_pressure: 'Safety valve pressure',
            prod_kmd_max_load: 'Maximum load',
            prod_kmd_pump_flow: 'Recommended pump flow',
            prod_kmd_floor_speed: 'Floor speed*',
            prod_kmd_oil_temp: 'Maximum oil temperature',
            
            // S-Drive section (English)
            prod_sdrive_intro: 'KEITH® S-Drive™ is a <span class="kw">premium hydraulic drive</span> developed by KEITH® Manufacturing Co. specifically for the entire WALKING FLOOR® system. It is the "heart" that enables floor slats to move harmoniously, allowing <span class="kw">automatic loading or unloading</span> without tipping – ensuring <span class="kw">safety and time savings</span> for all transport businesses.',
            prod_sdrive_apps_li1: '<span class="kw">Heavy bulk cargo transport</span>: waste, wood chips, agricultural products, minerals.',
            prod_sdrive_apps_li2: '<span class="kw">Industrial logistics & warehousing</span>: fast loading/unloading solutions in low-ceiling spaces.',
            prod_sdrive_apps_li3: '<span class="kw">Specialized trailers & containers</span>: optimized for both new KEITH® walking floor systems and upgrades.',
            prod_sdrive_mechanism_li1: '<span class="kw">Power source</span>: S-Drive receives power from tractor PTO (Power Take-Off).',
            prod_sdrive_mechanism_li2: '<span class="kw">Closed hydraulic system</span>: includes pump, pressure lines – return lines, oil tank and filter, providing high-pressure oil to cylinders.',
            prod_sdrive_mechanism_li3: '<span class="kw">Dual operation mode</span>: <ul><li><strong>Load (loading)</strong>: floor moves forward, bringing material into compartment.</li><li><strong>Unload (unloading)</strong>: floor "steps" sequentially pushing all cargo out.</li></ul>',
            prod_sdrive_mechanism_li4: '<span class="kw">Simple control</span>: ball valve allows instant hydraulic oil on/off; relief valve provides safety protection when pressure spikes.',
            prod_sdrive_benefits_li1: '<span class="kw">Optimized transport efficiency</span>: significantly reduces loading/unloading time and vehicle turnaround.',
            prod_sdrive_benefits_li2: '<span class="kw">Absolute safety</span>: no tipping required, reduces rollover risks and workplace accidents.',
            prod_sdrive_benefits_li3: '<span class="kw">High durability, minimal maintenance</span>: modular design, quick-connect valves and fittings for easy inspection and replacement.',
            prod_sdrive_benefits_li4: '<span class="kw">Professional service enhancement</span>: delivers modern image, creates sustainable competitive advantage.',
            
            // S-Drive section titles (English - missing keys)
            prod_sdrive_apps_title: 'Outstanding Applications',
            prod_sdrive_mechanism_title: 'Mechanism & Operating Principles',
            prod_sdrive_benefits_title: 'Business Benefits',
            prod_sdrive_refdocs_title: 'Reference Documents',
            prod_sdrive_refdocs_subtitle: 'Download detailed technical documents about KEITH® S-Drive™',
            prod_sdrive_refdoc1_title: 'KEITH® S-Drive Owners Manual',
            prod_sdrive_refdoc1_desc: 'Detailed operation and maintenance guide for KEITH® S-Drive system owners.',
            
            // KMD section titles (English - missing keys)
            prod_kmd_sec1_title: '1. Role in KEITH® WALKING FLOOR® System',
            prod_kmd_sec2_title: '2. Mechanism & Operating Principles',
            prod_kmd_sec3_title: '3. Specifications & Configuration',
            
            // Reference documents section (English - missing keys)
            prod_refdocs_title: 'Reference Documents',
            prod_refdocs_subtitle: 'Download detailed technical documents about KEITH® RUNNING FLOOR II™',
            prod_refdoc1_title: 'Keith Running Floor II DX Updated',
            prod_refdoc1_desc: 'Updated documentation for KEITH® Running Floor II DX system with latest technical specifications.',
            prod_refdoc2_title: 'KEITH® Running Floor II DX/DXE Owners Manual',
            prod_refdoc2_desc: 'Detailed operation and maintenance guide for KEITH® Running Floor II DX/DXE system owners.',
            prod_refdoc3_title: 'Parts Running Floor Manual',
            prod_refdoc3_desc: 'Guide for components and replacement parts for Running Floor systems.',
            
            // Technical specifications table headers (English - missing keys)
            prod_specs_title: 'Outstanding Technical Specifications',
            prod_specs_col_param: 'Parameter',
            prod_specs_col_value: 'Value',
            prod_specs_col_note: 'Note',
            
            // KMD table cell values (English)
            prod_kmd_250_cylinder_diameter: '2.5 in (64 mm)',
            prod_kmd_300_cylinder_diameter: '3.0 in (76 mm)',
            prod_kmd_250_stroke: '5 in (127 mm)',
            prod_kmd_300_stroke: '5 in (127 mm)',
            prod_kmd_250_pressure: '2,800–3,000 PSI',
            prod_kmd_300_pressure: '2,800–3,000 PSI',
            prod_kmd_250_load: '8 tons (7.3 t)',
            prod_kmd_300_load: '16 tons (14.5 t)',
            prod_kmd_250_flow: '5–6 gal/min (18–22 L/min)',
            prod_kmd_300_flow: '5–6 gal/min (18–22 L/min)',
            prod_kmd_250_speed: '3–6.5 ft/min (1–2 m/min)',
            prod_kmd_300_speed: '2–4 ft/min (0.6–1.2 m/min)',
            prod_kmd_250_temp: '140 °F (60 °C)',
            prod_kmd_300_temp: '140 °F (60 °C)',
            
            // Big technical specifications table (English)
            prod_big_specs_cylinder_bore: 'Cylinder Bore Diameter',
            prod_big_specs_cylinder_bore_value: '3.0 in (~76 mm), 3.5 in (~89 mm), 4.0 in (~102 mm)',
            prod_big_specs_cylinder_bore_note: 'Options based on load & trailer configuration',
            prod_big_specs_cylinder_stroke: 'Cylinder Stroke Length',
            prod_big_specs_cylinder_stroke_value: '~6.0 - 10.0 in depending on bore',
            prod_big_specs_cylinder_stroke_note: 'Determined by specific configuration',
            prod_big_specs_min_pressure: 'Minimum Operating Pressure',
            prod_big_specs_min_pressure_value: '2800 PSI (~193 bar)',
            prod_big_specs_min_pressure_note: 'This is the pressure level required for proper system operation',
            prod_big_specs_max_pressure: 'Maximum Operating Pressure',
            prod_big_specs_max_pressure_value: '3000 PSI (~207 bar)',
            prod_big_specs_max_pressure_note: 'Do not exceed to ensure safety and longevity',
            prod_big_specs_flow_rate: 'Recommended Oil Flow Rate',
            prod_big_specs_flow_rate_value: '40 – 60 gal/min (~151 - 227 L/min)',
            prod_big_specs_flow_rate_note: 'For optimal performance. Lower flow rates will still work but discharge speed will be slower',
            prod_big_specs_min_flow: 'Minimum Acceptable Flow Rate',
            prod_big_specs_min_flow_value: '~5 gal/min (~19 L/min)',
            prod_big_specs_min_flow_note: 'For light operation / low load',
            prod_big_specs_floor_speed: 'Floor Speed (with 3.0" piston)',
            prod_big_specs_floor_speed_value: '~ 8.2 ft/min at 950 RPM with ~30 gal/min<br>~ 12.5 ft/min at ~ 1430 RPM with ~45 gal/min<br>~ 16.4 ft/min at ~1900 RPM with ~60 gal/min',
            prod_big_specs_floor_speed_note: 'Equivalent to ~2.5 – 5 m/min depending on conditions (vehicle length, material, configuration)',
            prod_big_specs_hydraulic_oil: 'Recommended Hydraulic Oil',
            prod_big_specs_hydraulic_oil_value: 'ISO-L-HM 46 or equivalent',
            prod_big_specs_hydraulic_oil_note: 'Ensures proper viscosity & thermal stability',
            prod_big_specs_relief_valve: 'Safety / Relief Valve',
            prod_big_specs_relief_valve_value: 'Set from 2800 to 3000 PSI',
            prod_big_specs_relief_valve_note: 'Must be high quality valve, capable of handling full pump flow',
            prod_big_specs_wet_kit: 'Wet Kit (hydraulic accessories for tractor)',
            prod_big_specs_wet_kit_value: 'Requires suction line ≤ ~1.5 m, minimum diameter ~2 in;<br>pressure hose, return hose of appropriate diameter;<br>install oil filter as specified;<br>oil tank capacity ~1 gal per gal/min of estimated pump',
            prod_big_specs_wet_kit_note: '-',
            
            // S-Drive specifications table headers (English - missing keys)
            prod_sdrive_specs_title: 'Standard Technical Specifications (per KEITH®)',
            prod_sdrive_specs_col_item: 'Item',
            prod_sdrive_specs_col_value: 'Recommended Value',
            
            // S-Drive specifications (English)
            prod_sdrive_specs_max_pressure: 'Maximum Operating Pressure',
            prod_sdrive_specs_max_pressure_value: '2,800 – 3,000 PSI (~193 – 207 bar)',
            prod_sdrive_specs_flow_rate: 'Recommended Oil Flow Rate',
            prod_sdrive_specs_flow_rate_value: '40 – 60 gal/min (151 – 227 L/min) for optimal discharge speed',
            prod_sdrive_specs_min_flow: 'Minimum Acceptable Flow Rate',
            prod_sdrive_specs_min_flow_value: '~5 gal/min (≈19 L/min)',
            prod_sdrive_specs_oil_type: 'Hydraulic Oil Type',
            prod_sdrive_specs_oil_type_value: 'ISO-L-HM 46 or equivalent',
            prod_sdrive_specs_relief_valve: 'Safety Relief Valve',
            prod_sdrive_specs_relief_valve_value: 'Set at 2,800 – 3,000 PSI, ensures protection of entire system',
            prod_sdrive_specs_wet_kit: '"Wet Kit" Requirements',
            prod_sdrive_specs_wet_kit_value: 'Suction line ≤1.5 m, diameter ≥2", oil tank ≥1 gallon per gallon/min pump flow',
            
            apps_construction_video_title: 'Construction materials application demo video',

            apps_fertilizer_title2: 'Applications in fertilizer handling',

            apps_fertilizer_card1_title: 'Receive fertilizer from trucks / bulk bags',
            apps_fertilizer_card1_text: 'The system unloads fertilizer from trucks/trailers without tipping, reducing manual labor.',

            apps_fertilizer_card2_title: 'Temporary fertilizer storage',
            apps_fertilizer_card2_text: 'Store fertilizer in fixed bins and discharge evenly when needed for blending or packaging.',

            apps_fertilizer_card3_title: 'Metered / consistent feeding',
            apps_fertilizer_card3_text: 'For mixers, bagging machines, and continuous production lines, stable fertilizer flow is critical. Walking Floor provides a steady, adjustable feed.',

            apps_fertilizer_card4_title: 'Fast & clean fertilizer discharge',
            apps_fertilizer_card4_text: 'Minimizes residual fertilizer left in trucks or bins, reducing waste and preventing moisture or spoilage issues.',

            apps_fertilizer_benefits_title: 'Benefits & advantages for fertilizer handling',
            apps_fertilizer_th_benefit: 'Benefit',
            apps_fertilizer_th_explain: 'Explanation related to fertilizer',

            apps_fertilizer_b1_title: 'Reduced material loss',
            apps_fertilizer_b1_text: 'Fertilizer granules are small and dusty, easily lost in manual unloading. Walking Floor ensures cleaner discharge with less residual waste.',

            apps_fertilizer_b2_title: 'Improved safety & hygiene',
            apps_fertilizer_b2_text: 'Less dust, less human contact. No need to tip or manually shovel fertilizer – reducing risks of dust inhalation or chemical exposure.',

            apps_fertilizer_b3_title: 'Consistent quality',
            apps_fertilizer_b3_text: 'Fertilizer stored too long in trucks/bins may be affected by heat or humidity. Quick discharge keeps fertilizer in optimal condition.',

            apps_fertilizer_b4_title: 'Flexible & convenient operation',
            apps_fertilizer_b4_text: 'Bins can be placed close to usage points, no large space needed for truck tipping; especially useful in fertilizer plants or farms with limited space.',

            apps_fertilizer_b5_title: 'Optimized labor & time costs',
            apps_fertilizer_b5_text: 'Less manual work for handling fertilizer, reduced truck idle time; overall operational costs can be lower.',

            apps_fertilizer_notes_title: 'Key considerations / challenges in fertilizer applications',
            apps_fertilizer_notes_detail1: 'Diverse fertilizer types: Large granules, fine particles, moist organic fertilizers, dry chemical fertilizers... each has different properties (specific weight, moisture, stickiness, dust). Choose appropriate slats/floors with anti-wear coatings and easy cleaning.',
            apps_fertilizer_notes_detail2: 'High moisture: Moist fertilizers can stick to floors, potentially causing blockages or reduced discharge efficiency. May need slight incline design or vibration/scrubbing/water spray systems for cleaning support.',
            apps_fertilizer_notes_detail3: 'Dust issues: Dry chemical fertilizers can be very dusty; dust control measures (shielding, dust extraction) are needed to ensure worker safety and prevent environmental dust dispersion.',
            apps_fertilizer_notes_detail4: 'Hygiene & contamination prevention: Using the same floor for different materials risks cross-contamination (e.g., residual material from previous loads). Design for easy cleaning and thorough washing when needed.',

            apps_fertilizer_video_title: 'Fertilizer application demo video',
            apps_fertilizer_video_caption: 'Walking Floor application in fertilizer handling',
            prod_download_btn : 'Download PDF',
            
            // Floor slats section (English)
            prod_slats_title: 'KEITH® WALKING FLOOR® SLATS',
            prod_slats_intro_title: '1. Product Introduction',
            prod_slats_role_title: '2. Important Role in the System',
            prod_slats_specs_title: 'Detailed Technical Specifications - KEITH® SLATS',
            prod_slats_features_title: 'Outstanding Features & Benefits',
            prod_slats_feat_card_title: 'Outstanding Features',
            prod_slats_benefit_card_title: 'Business Benefits',
            prod_slats_video_title: 'KEITH® WALKING FLOOR® slats demo video',
            prod_slats_intro_p1: 'Floor slats are the <span class="kw">primary moving surface</span> in the entire KEITH® WALKING FLOOR® system. These are the floor components that directly bear loads and perform the sequential <span class="kw">"walking" motion</span> to automatically load or unload cargo without tipping.',
            prod_slats_intro_p2: 'Thanks to pioneering technology from KEITH® Manufacturing Co., floor slats not only ensure <span class="kw">superior durability</span>, but also serve as the primary force transmission component, elevating business transport efficiency to new heights.',
            prod_slats_role_li1: '<span class="kw">Direct contact with cargo</span>: Bears full load and friction from materials ranging from waste, wood chips, agricultural products to heavy industrial scrap.',
            prod_slats_role_li2: '<span class="kw">"Walking Floor" transmission</span>: Coordinates harmoniously with hydraulic drive systems (Running Floor II, S-Drive) – slat groups move alternately, creating "walking" motion to push cargo out.',
            prod_slats_role_li3: '<span class="kw">Safety & efficiency assurance</span>: Enables fast unloading in low-ceiling warehouses, eliminating rollover risks from tipping.',
            prod_slats_image_caption: 'KEITH® WALKING FLOOR® slat types',
            prod_slats_specs_subtitle: '(Per keithwalkingfloor.com/slats-profiles)',
            prod_slats_specs_col_item: 'Item',
            prod_slats_specs_col_detail: 'Details',
            prod_slats_specs_col_note: 'Notes',
            
            // Floor slats specifications table (English)
            prod_slats_material: 'Material',
            prod_slats_material_value: 'High-strength aluminum alloy or stainless steel',
            prod_slats_material_note: 'Depending on specific application',
            prod_slats_thickness: 'Slat thickness',
            prod_slats_thickness_value: '~5 – 8 mm',
            prod_slats_thickness_note: 'Depending on product line',
            prod_slats_length: 'Length',
            prod_slats_length_value: 'According to trailer/container length',
            prod_slats_length_note: 'Cut to required dimensions',
            prod_slats_profiles: 'Profiles',
            prod_slats_profiles_value: '- Standard: flat design, versatile<br>- Leak-Resistant: with seals/ridges, leak-proof<br>- Heavy-Duty: thick version, extreme load bearing',
            prod_slats_profiles_note: 'Suitable from light agricultural products to heavy scrap',
            prod_slats_surface: 'Surface treatment',
            prod_slats_surface_value: 'Anodizing or powder coating',
            prod_slats_surface_note: 'Anti-wear & oxidation resistance',
            prod_slats_load: 'Working load',
            prod_slats_load_value: 'Up to tens of tons/m²',
            prod_slats_load_note: 'Designed synchronized with 2,800–3,000 PSI system pressure',
            prod_slats_maintenance: 'Maintenance',
            prod_slats_maintenance_value: 'Individual removal and replacement',
            prod_slats_maintenance_note: 'No need to disassemble entire floor',
            
            // Floor slats features and benefits (English)
            prod_slats_feat_li1: '<span class="kw">Diverse configurations</span>: multiple different profiles, suitable from light agricultural products to heavy scrap.',
            prod_slats_feat_li2: '<span class="kw">Wear-resistant – corrosion-resistant</span>: protective anodizing layer, durable operation in humid environments or with mild chemicals.',
            prod_slats_feat_li3: '<span class="kw">Smart modular design</span>: easy individual slat installation/removal, saving maintenance costs and reducing vehicle downtime.',
            prod_slats_feat_li4: '<span class="kw">High performance</span>: perfect coordination with KEITH® drive systems, fast – safe – stable unloading.',
            prod_slats_benefit_li1: 'Optimize vehicle turnaround time, reduce operating costs.',
            prod_slats_benefit_li2: 'Increase vehicle lifespan, protect trailer structure and cargo.',
            prod_slats_benefit_li3: 'Minimize workplace accident risks by eliminating tipping needs.',
            prod_slats_benefit_li4: 'Enhance professional image and competitive advantage.',
            prod_slats_video_caption: 'KEITH® WALKING FLOOR® slats',
            
            // Coordination section (English)
            prod_coord_title: 'Coordination Between KEITH® WALKING FLOOR® Slats and KEITH® Drive Systems',
            prod_coord_subtitle: '(Per official technical documentation from KEITH® Manufacturing Co.: keithwalkingfloor.com/slats-profiles and keithwalkingfloor.com/download/keith-running-floor-ii-dx-owners-manual)',
            prod_coord_struct_title: '1. "Synchronized" Structure Between Floor and Drive',
            prod_coord_struct_li1: 'Floor slats are securely attached to cross-drives (transverse drive bars).',
            prod_coord_struct_li2: 'Cross-drives connect directly to hydraulic cylinders of the drive unit (e.g., Running Floor II or S-Drive).',
            prod_coord_struct_li3: 'When cylinders move in cycles, cross-drives pull or push slat groups, creating sequential <span class="kw">"walking" motion</span>.',
            prod_coord_struct_summary: '→ This is KEITH®\'s original design: every component (slats, cross-drives, cylinders, control valves) is designed to mesh together, ensuring <span class="kw">even and precise force transmission</span>.',
            prod_coord_steps_title: '2. "3-Step" Coordination Principle',
            prod_coord_steps_intro: 'According to KEITH® Running Floor II Owner\'s Manual, the unloading process follows a three-step cycle:',
            prod_coord_step1: 'Step 1',
            prod_coord_step1_desc: '<strong>Push Phase Groups 1 & 2</strong><br>Two slat groups move simultaneously backward, remaining group stays fixed → friction force between cargo and moving groups pushes material toward discharge.',
            prod_coord_step2: 'Step 2', 
            prod_coord_step2_desc: '<strong>Group 1 Hold – Groups 2 & 3 Pull Forward</strong><br>Group that just finished pushing is held in place, remaining groups slide back to starting position.',
            prod_coord_step3: 'Step 3',
            prod_coord_step3_desc: '<strong>Group 2 Hold – Groups 1 & 3 Pull Forward</strong><br>Continue "stepping" until all cargo is pushed out.',
            prod_coord_steps_summary: '→ Each slat group and cylinder operates in calculated rhythm, <span class="kw">absolutely synchronized</span> to maintain continuous material flow.',
            prod_coord_drive_title: '3. Role of KEITH® Drive Systems',
            prod_coord_drive_li1: '<span class="kw">Power source</span>: Drive unit (Running Floor II / S-Drive) provides 2,800–3,000 PSI pressure, 40–60 gal/min flow to ensure 2.5–5 m/min floor speed.',
            prod_coord_drive_li2: '<span class="kw">Control & safety</span>: Control valve, ball valve, and relief valve ensure stable pressure, prevent pressure shock.',
            prod_coord_drive_li3: '<span class="kw">Lifespan protection</span>: Precise integration prevents slat warping or localized wear.',
            prod_coord_benefits_title: '4. Benefits of Perfect Coordination',
            prod_coord_benefits_li1: '<span class="kw">High unloading efficiency</span>: Continuous, uniform floor movement → reduces unloading time, increases transport trips.',
            prod_coord_benefits_li2: '<span class="kw">Absolute safety</span>: No tipping required, reduces rollover risks.',
            prod_coord_benefits_li3: '<span class="kw">Reduced maintenance costs</span>: Each component (slats, cross-drives, cylinders) designed for quick installation/removal, easy individual replacement.',
            prod_coord_benefits_li4: '<span class="kw">Superior durability</span>: Drive systems and slats synchronously designed by KEITH®, ensuring long-term lifespan even in waste, wood chip, or heavy scrap environments.',
            prod_coord_summary_title: 'Summary',
            prod_coord_summary_desc: 'KEITH® slats and KEITH® drive systems are not merely "compatible" but designed as a unified whole. This synchronization enables WALKING FLOOR® systems to operate smoothly, safely, and durably, maintaining global leadership in automatic unloading technology.',
            prod_system_video_title: 'System operation demo video',
            prod_system_video_caption: 'Video: Explaining how the walking floor system works: movement cycle of floor slats, hydraulic drives, unloading process.',
            
            // Citations section
            prod_sources_title: 'Primary Information Sources',
            prod_source1: 'According to KEITH® Running Floor II DX/DXE Owner\'s Manual by Ferguson Farms – document "Owner / Operator Manual – RUNNING FLOOR II® DX / DXE"',
            prod_source1_company: 'Ferguson Farms, Inc.',
            prod_source2: 'According to "KEITH® Running Floor II DX Owners Manual" by Titan Trailers',
            prod_source2_company: 'Titan Trailers Inc.',
            prod_source3: 'According to KEITH® Walking Floor Official Website – Downloads / Owner\'s Manual section',
            prod_source3_company: 'Keith Walking Floor',
            prod_source4: 'According to Manualslib — "Keith Running Floor II DX Manuals" license',
            prod_source4_company: 'ManualsLib',
            prod_source5: '(According to official document "KEITH® S-Drive Owner / Operator Manual – DOC06302 Rev H" on',
            prod_source5_link: 'keithwalkingfloor.com',
            
            // News page
            news_hero_title: 'News',
            news_hero_subtitle: 'Latest news updates',
            news_construction_title: 'Website under development and upgrade',
            news_construction_desc: 'Content will be updated soon. Thank you for visiting!',
            
            // Partnership content (English)
            news_partnership_title: 'Nhu Tin Corporation – Partnership & Development',
            news_partnership_intro: 'Nhu Tin Corporation, the official distributor of KEITH® WALKING FLOOR® systems in Vietnam, is always looking to expand our partnership network.',
            news_partnership_invite: 'We cordially invite:',
            news_partnership_installers: 'Experienced equipment installation companies',
            news_partnership_installers_desc: 'with proven expertise',
            news_partnership_dealers: 'Reputable and dedicated distributors',
            news_partnership_dealers_desc: 'with passion and commitment',
            news_partnership_commitment: 'Nhu Tin commits to partnership with',
            news_partnership_sincere: 'Sincerity',
            news_partnership_transparent: 'Transparency',
            news_partnership_sustainable: 'Sustainability',
            news_partnership_solution: 'delivering modern, safe, and most efficient unloading solutions.',
            news_partnership_contact_title: 'Contact Now',
            news_partnership_contact_desc: 'For detailed information, please contact us directly at:',
            
            // Downloads page
            downloads_hero_title: 'DOWNLOADS',
            downloads_rf2_title: 'RUNNING FLOOR II – Documents',
            downloads_kmd_title: 'KMD – Documents',
            downloads_sdrive_title: 'S-Drive – Documents',
            downloads_table_title: 'Title',
            downloads_table_date: 'Update Date',
            downloads_table_download: 'Download',
            downloads_btn_preview: 'Preview',
            downloads_btn_download: 'Download',
            downloads_file_count: 'file(s)',
            downloads_preview_note: 'Click "Preview" to open document in browser before downloading.',
            
            // About Keith page
            aboutkeith_hero_title: 'Customers inspire us <br>Innovation creates value',
            aboutkeith_hero_subtitle: 'KEITH® Walking Floor® Vietnam',
            aboutkeith_history_title: 'Leading in material handling for over 70 years',
            aboutkeith_history_p1: 'The origins of the <span class="kw">WALKING FLOOR®</span> unloading system began in 1950, when founder <span class="kw">Keith Foster</span> — the "Keith" in KEITH® — developed material handling equipment for the agricultural industry. In the early 1970s, he established <span class="kw">KEITH® Manufacturing</span> in Madras, Oregon, with the goal of creating the most <span class="kw">durable, reliable and efficient</span> unloading system. The <span class="kw">KEITH® WALKING FLOOR®</span> system quickly became the industry standard in moving floor technology.',
            aboutkeith_history_p2: 'Today, the company is operated by the <span class="kw">second and third generations</span> of the Foster family, always committed to bringing <span class="kw">success to customers</span>.',
            aboutkeith_global_title: 'Global customer support',
            aboutkeith_global_p1: 'The <span class="kw">WALKING FLOOR®</span> brand is recognized worldwide to designate <span class="kw">automatic unloading</span> products, designed and manufactured <span class="kw">exclusively by KEITH®</span>. The company has supplied over <span class="kw">90,000 systems</span> and holds over <span class="kw">270 patents</span>.',
            aboutkeith_global_p2: 'KEITH® systems are applied in many <span class="kw">global industries</span> for bulk material handling. <span class="kw">KEITH® Manufacturing</span> currently operates in <span class="kw">5 countries</span> and owns an <span class="kw">extensive dealer network</span>, ready to serve customers anywhere.',
            aboutkeith_gallery_title: 'Below are some images of the company.',
            aboutkeith_image_source: 'Image source from',
            
            // About Nhu Tin page
            aboutnhutin_hero_title: 'NHU TIN CORPORATION',
            aboutnhutin_hero_subtitle: 'KEITH® WALKING FLOOR® Partner in Vietnam',
            aboutnhutin_main_title: 'INTRODUCTION TO NHU TIN CORPORATION',
            aboutnhutin_p1: '<span class="kw">Nhu Tin</span> Corporation was established in January 2010. We always strive to build good cooperative relationships with partners and continuously develop business activities on the basis of bringing mutual benefits.',
            aboutnhutin_p2: 'We specialize in supplying <span class="kw">cashew shell biomass fuel</span> (cashew shell residue after oil extraction).',
            aboutnhutin_p3: 'As a pioneer in applying cashew shell fuel for <span class="kw">industrial boilers</span> with decades of experience, we are confident in providing effective solutions for using cashew shell fuel and other biomass fuels, including:',
            aboutnhutin_li1: 'Supplying <span class="kw">improved boiler equipment</span> for burning cashew shells.',
            aboutnhutin_li2: 'Consulting on effective cashew shell use to <span class="kw">save production costs up to 50%</span> compared to burning only coal.',
            aboutnhutin_li3: 'Consulting on safe operation, <span class="kw">without affecting equipment lifespan</span>.',
            aboutnhutin_li4: 'Consulting on <span class="kw">smoke emission treatment</span> without affecting the surrounding environment.',
            aboutnhutin_p4: 'Since 2018, Nhu Tin pioneered investment and implementation of <span class="kw">automatic unloading technology (self-dumping)</span> for trucks and container tractors from the USA.',
            aboutnhutin_p5: 'After screening and practical application, Nhu Tin is currently the <span class="kw">exclusive partner of Keith Walking Floor (USA)</span> to distribute and install <span class="kw">automatic cargo loading and unloading systems</span> for trucks and containers – with quality, efficiency and reasonable costs in Vietnam.',
            aboutnhutin_p6: 'The system is compact, flexible, suitable for diverse cargo, <span class="kw">load capacity from 10 to 80 tons</span>, <span class="kw">high durability</span>, virtually <span class="kw">maintenance-free</span>, simple operation, quick installation and easy integration with customers\' existing vehicles.',
            aboutnhutin_p7: 'With a reputable, responsible, flexible & efficient management team, we are committed to providing quality products with <span class="kw">competitive prices</span>, <span class="kw">guaranteed schedules</span>, meeting diverse customer requirements.',
            aboutnhutin_p8: 'With the motto of <span class="kw">reputation and sustainable cooperation</span>, Nhu Tin continuously improves to bring <span class="kw">satisfaction</span> and <span class="kw">trust</span> to customers.'
        }
    };

    function translatePage(lang) {
        console.log('🔄 Translating to:', lang);
        // Plain text translations
        var elements = document.querySelectorAll('[data-i18n]');
        console.log(' Found', elements.length, 'data-i18n elements');
        elements.forEach(function(el) {
            var key = el.getAttribute('data-i18n');
            var text = dictionaries[lang] && dictionaries[lang][key];
            if (text) {
                el.textContent = text;
            } else {
                console.log('❌ No translation for key:', key);
            }
        });
        // HTML translations (preserve markup like <span class="kw">)
        var htmlElements = document.querySelectorAll('[data-i18n-html]');
        console.log(' Found', htmlElements.length, 'data-i18n-html elements');
        htmlElements.forEach(function(el) {
            var key = el.getAttribute('data-i18n-html');
            var html = dictionaries[lang] && dictionaries[lang][key];
            if (html) {
                el.innerHTML = html;
            } else {
                console.log('❌ No HTML translation for key:', key);
            }
        });
    }

    function getCookie(name) {
        var match = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
        return match ? decodeURIComponent(match[1]) : null;
    }

    function setLanguage(lang) {
        console.log('🌐 Setting language to:', lang);
        localStorage.setItem('site_lang', lang);
        try {
            document.cookie = 'site_lang=' + encodeURIComponent(lang) + '; path=/; max-age=31536000; samesite=lax';
        } catch (e) {}
        document.body.setAttribute('data-lang', lang);
        translatePage(lang);
        
        // Update all toggle buttons to show target language
        var toggles = document.querySelectorAll('[data-toggle-lang] .lang-toggle');
        toggles.forEach(function(btn){
            btn.textContent = (lang === 'vi') ? 'EN' : 'VI';
        });
    }

    function initLanguage() {
        var cookieLang = getCookie('site_lang');
        var localLang = localStorage.getItem('site_lang');
        var stored = cookieLang || localLang || 'vi';
        console.log('🚀 Initializing with language:', stored);
        console.log('🔍 Current body data-lang:', document.body.getAttribute('data-lang'));
        
        // Set body attribute first to establish current language
        document.body.setAttribute('data-lang', stored);
        setLanguage(stored);
        
        console.log('✅ Language initialized to:', stored);
    }

    // Global functions
    window.translatePage = translatePage;
    window.setLanguage = setLanguage;

    // Click handler for language toggle
    document.addEventListener('click', function(e) {
        console.log('🖱️ Click detected on:', e.target.tagName, 'classes:', e.target.className);
        
        if (e.target.classList.contains('lang-toggle') || e.target.closest('.lang-toggle')) {
            console.log('🖱️ Toggle button clicked!');
            e.preventDefault();
            e.stopPropagation();
            
            var current = document.body.getAttribute('data-lang') || 'vi';
            var next = (current === 'vi') ? 'en' : 'vi';
            console.log('🔄 Current:', current, '→ Next:', next);
            console.log('🔍 Body data-lang before:', document.body.getAttribute('data-lang'));
            
            setLanguage(next);
            
            console.log('🔍 Body data-lang after:', document.body.getAttribute('data-lang'));
        }
    });

    // Auto-translate when new elements are added
    var observer = new MutationObserver(function(mutations) {
        var hasNewI18n = false;
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1) {
                    if (node.hasAttribute && node.hasAttribute('data-i18n')) {
                        hasNewI18n = true;
                    } else if (node.querySelector && node.querySelector('[data-i18n]')) {
                        hasNewI18n = true;
                    }
                }
            });
        });
        if (hasNewI18n) {
            var current = document.body.getAttribute('data-lang') || 'vi';
            console.log(' New i18n elements detected, re-applying language...');
            setLanguage(current);
        }
    });

    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initLanguage();
            observer.observe(document.body, { childList: true, subtree: true });
        });
    } else {
        initLanguage();
        observer.observe(document.body, { childList: true, subtree: true });
    }

    console.log('✅ i18n script loaded successfully!');
})();